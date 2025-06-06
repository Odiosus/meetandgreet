import { useNavigate } from 'react-router-dom';
import SearchField from './SearchField.jsx';
import styles from './AirportSearch.module.scss';
import { airports } from '../../../data/airports.js';
import { useAirportSearch } from '../../../hooks/useAirportSearch.js';
import Button from '../../../components/Buttons/Button.jsx';

/**
 * Компонент AirportSearch - это форма поиска аэропортов
 * со следующими полями: аэропорт отправления, аэропорт транзита,
 * аэропорт прибытия.
 * <br />
 * <br />
 * Он использует хук {@link useAirportSearch}, чтобы
 * хранить состояние формы, фильтровать аэропорты,
 * обрабатывать события ввода, фокуса,_blura_и нажатия
 * клавиш.
 * <br />
 * <br />
 * Он также использует {@link Button} для кнопки "Следующий шаг".
 * <br />
 * <br />
 * @returns {React.ReactElement} - компонент AirportSearch
 */
export default function AirportSearch () {
  const fields = ['departure', 'transit', 'arrival'];
  const navigate = useNavigate();

  /**
   * Функция-валидатор, которая проверяет, что аэропорт отправления
   * не может быть таким же, как аэропорт прибытия.
   * @param {string} field - поле, которое нужно валидировать
   * @param {string} currentCode - код текущего аэропорта
   * @param {string[]} otherCodes - коды других аэропортов
   * @returns {string|null} - ошибка валидации, если она есть, null - если нет
   */
  const validate = (field, currentCode, otherCodes) => {
    if (field === 'departure' && otherCodes.includes( currentCode )) {
      return '   ,       .';
    }
    if (field === 'arrival' && otherCodes.includes( currentCode )) {
      return '   ,       .';
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

  /**
   * Обработчик события нажатия кнопки "Следующий шаг".
   * Он проверяет, что пользователь выбрал аэропорты отправления
   * и прибытия, и что они не одинаковы. Если это так, то
   * он перенаправляет на страницу /next-form.
   */
  const handleNext = () => {
    const departureCode = selected.departure ? selected.departure.match( /\((.*?)\)/ )?.[1] : null;
    const arrivalCode = selected.arrival ? selected.arrival.match( /\((.*?)\)/ )?.[1] : null;

    if (!selected.departure || !selected.arrival) {
      alert( '   ,       .' );
    } else if (departureCode === arrivalCode) {
      alert( '   ,       .' );
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
          aria-label=" "
        />
      </div>
    </div>
  );
}