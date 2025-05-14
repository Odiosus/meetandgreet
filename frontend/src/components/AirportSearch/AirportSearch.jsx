// components/AirportSearch/AirportSearch.jsx
import { useNavigate } from 'react-router-dom';
import SearchField from './SearchField.jsx';
import styles from './AirportSearch.module.scss';
import { airports } from '../../data/airports';
import { useAirportSearch } from '../../hooks/useAirportSearch';
import Button from "../Buttons/Button.jsx";

export default function AirportSearch () {
  const fields = ['departure', 'transit', 'arrival'];
  const navigate = useNavigate();

  const validate = (field, currentCode, otherCodes) => {
    if (field === 'departure' && otherCodes.includes( currentCode )) {
      return 'Departure airport cannot be the same as Arrival airport.';
    }
    if (field === 'arrival' && otherCodes.includes( currentCode )) {
      return 'Arrival airport cannot be the same as Departure airport.';
    }
    return null;
  };

  const {
    searchTerms,
    selected,
    isOpen,
    getFilteredData,
    handleSearchChange,
    handleSelect,
  } = useAirportSearch( fields, airports, validate );

  const handleNext = () => {
    const departureCode = selected.departure ? selected.departure.match( /\((.*?)\)/ )[1] : null;
    const arrivalCode = selected.arrival ? selected.arrival.match( /\((.*?)\)/ )[1] : null;

    if (!selected.departure || !selected.arrival) {
      alert( 'Please select Departure and Arrival airports.' );
    } else if (departureCode === arrivalCode) {
      alert( 'Departure and Arrival airports cannot be the same.' );
    } else {
      navigate( '/next-form', {state: selected} );
    }
  };

  return (
    <div className={styles.searchContainer}>
      <div className={styles.searchFields}>
        {fields.map( field => (
          <SearchField
            key={field}
            field={field}
            label={field.charAt( 0 ).toUpperCase() + field.slice( 1 )}
            searchTerm={searchTerms[field]}
            selected={selected[field]}
            isOpen={isOpen[field]}
            filteredData={getFilteredData( searchTerms[field] )}
            onSearchChange={handleSearchChange}
            onSelect={handleSelect}
          />
        ) )}
        <Button
          className={styles.nextButton}
          onClick={handleNext}
          icon={'rightArrow'}
          aria-label="Next step"
        />
      </div>
    </div>
  );
}