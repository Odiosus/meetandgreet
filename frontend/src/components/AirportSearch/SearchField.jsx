import { useMemo } from 'react';
import styles from './AirportSearch.module.scss';

/**
 * Компонент Dropdown для отображения выпадающего списка с результатами поиска.
 */
function Dropdown ({filteredData, field, onSelect, focusedIndex}) {
  return (
    <ul className={styles.dropdown}
      role="listbox"
      id={`${field}-listbox`}>
      {filteredData.length === 0 ? (
        <li className={styles.dropdownItem}
          role="option"
          aria-selected="false">
          Ничего не найдено
        </li>
      ) : (
        filteredData.map( (item, index) => (
          <li
            key={item.code}
            onClick={() => onSelect( item, field )}
            className={`${styles.dropdownItem} ${index === focusedIndex ? styles.dropdownItemFocused : ''}`}
            role="option"
            aria-selected={index === focusedIndex}
          >
            {item.name} ({item.code}) - {item.city}
          </li>
        ) )
      )}
    </ul>
  );
}

/**
 * Компонент SearchField для ввода и поиска аэропортов с автодополнением.
 */
export default function SearchField ({
                                       field,
                                       label,
                                       searchTerm,
                                       selected,
                                       isOpen,
                                       focusedIndex,
                                       filteredData,
                                       onSearchChange,
                                       onSelect,
                                       handleFocus,
                                       handleBlur,
                                       handleKeyDown,
                                     }) {
  const hasValue = !!selected || !!searchTerm;

  // Мемоизация отфильтрованных данных
  const memoizedFilteredData = useMemo(
    () => filteredData,
    [filteredData]
  );

  return (
    <div className={styles.field}>
      <div className={styles.inputWrapper}>
        <label
          className={`${styles.label} ${hasValue ? styles.labelActive : ''}`}
          htmlFor={field}
        >
          {label}
        </label>
        <input
          type="text"
          id={field}
          value={selected || searchTerm}
          onChange={(e) => onSearchChange( field, e.target.value )}
          onFocus={() => handleFocus( field )}
          onBlur={() => handleBlur( field )}
          onKeyDown={(e) => handleKeyDown( field, e, memoizedFilteredData )}
          className={styles.input}
          autoComplete="off"
          role="combobox"
          aria-autocomplete="list"
          aria-controls={`${field}-listbox`}
          aria-expanded={isOpen}
        />
      </div>
      {isOpen && (
        <Dropdown
          filteredData={memoizedFilteredData}
          field={field}
          onSelect={onSelect}
          focusedIndex={focusedIndex}
        />
      )}
    </div>
  );
}