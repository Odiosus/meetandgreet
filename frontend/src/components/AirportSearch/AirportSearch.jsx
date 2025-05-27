import { useNavigate } from 'react-router-dom';
import SearchField from './SearchField.jsx';
import styles from './AirportSearch.module.scss';
import { airports } from '../../data/airports';
import { useAirportSearch } from '../../hooks/useAirportSearch';
import Button from '../Buttons/Button.jsx';

export default function AirportSearch () {
  const fields = ['departure', 'transit', 'arrival'];
  const navigate = useNavigate();

  const validate = (field, currentCode, otherCodes) => {
    if (field === 'departure' && otherCodes.includes( currentCode )) {
      return 'Аэропорт отправления не может быть таким же, как аэропорт прибытия.';
    }
    if (field === 'arrival' && otherCodes.includes( currentCode )) {
      return 'Аэропорт прибытия не может быть таким же, как аэропорт отправления.';
    }
    return null;
  };

  const {
    searchTerms,
    selected,
    isOpen,
    focusedIndex,
    getFilteredData,
    handleSearchChange,
    handleSelect,
    handleFocus,
    handleBlur,
    handleKeyDown,
  } = useAirportSearch( fields, airports, validate );

  const handleNext = () => {
    const departureCode = selected.departure ? selected.departure.match( /\((.*?)\)/ )?.[1] : null;
    const arrivalCode = selected.arrival ? selected.arrival.match( /\((.*?)\)/ )?.[1] : null;

    if (!selected.departure || !selected.arrival) {
      alert( 'Пожалуйста, выберите аэропорты отправления и прибытия.' );
    } else if (departureCode === arrivalCode) {
      alert( 'Аэропорты отправления и прибытия не могут быть одинаковыми.' );
    } else {
      navigate( '/next-form', {state: selected} );
    }
  };

  return (
    <div className={styles.searchContainer}>
      <div className={styles.searchFields}>
        {fields.map( (field) => (
          <SearchField
            key={field}
            field={field}
            label={field.charAt( 0 ).toUpperCase() + field.slice( 1 )}
            searchTerm={searchTerms[field]}
            selected={selected[field]}
            isOpen={isOpen[field]}
            focusedIndex={focusedIndex[field]}
            filteredData={getFilteredData( searchTerms[field] )}
            onSearchChange={handleSearchChange}
            onSelect={handleSelect}
            handleFocus={handleFocus}
            handleBlur={handleBlur}
            handleKeyDown={handleKeyDown}
          />
        ) )}
        <Button
          className={styles.nextButton}
          onClick={handleNext}
          icon={'rightArrow'}
          aria-label="Следующий шаг"
        />
      </div>
    </div>
  );
}