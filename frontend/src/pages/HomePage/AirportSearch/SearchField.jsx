import { useMemo } from 'react';
import styles from './AirportSearch.module.scss';

/**
 * Компонент Dropdown для отображения выпадающего списка с результатами поиска.
 */
/**
 * Компонент Dropdown для отображения выпадающего списка с результатами поиска.
 *
 * @param {object} props - объект свойств
 * @param {string} props.field - имя поля, для которого отображается выпадающий список
 * @param {function} props.onSelect - функция, которая будет вызвана, когда пользователь
 *                                    выберет аэропорт из списка
 * @param {number} props.focusedIndex - индекс элемента списка, на котором находится фокус
 * @param {boolean} props.hasMoreResults - флаг, указывающий, есть ли дополнительные результаты
 *                                         поиска, которые не отображаются в списке
 */
function Dropdown ({filteredData, field, onSelect, focusedIndex, hasMoreResults}) {
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
        <>
          {filteredData.map( (item, index) => (
            <li
              key={item.code}
              onClick={() => onSelect( item, field )}
              className={`${styles.dropdownItem} ${index === focusedIndex ? styles.dropdownItemFocused : ''}`}
              role="option"
              aria-selected={index === focusedIndex}
            >
              {item.name} ({item.code}) - {item.city}
            </li>
          ) )}
          {hasMoreResults && (
            <li className={styles.dropdownItem}
              role="presentation">
              ...и ещё результаты
            </li>
          )}
        </>
      )}
    </ul>
  );
}

/**
 * Компонент SearchField для ввода и поиска аэропортов с автодополнением.
 *
 * @param {object} props - объект свойств
 * @param {string} props.field - имя поля, для которого отображается выпадающий список
 * @param {string} props.label - текст, который будет отображаться в лейбле
 * @param {string} props.searchTerm - текст, который пользователь ввёл в поле
 * @param {string} props.selected - код выбранного аэропорта
 * @param {boolean} props.isOpen - флаг, указывающий, является ли выпадающий список открытым
 * @param {number} props.focusedIndex - индекс элемента списка, на котором находится фокус
 * @param {object[]} props.filteredData - массив результатов поиска
 * @param {function} props.onSearchChange - функция, которая будет вызвана, когда пользователь изменит
 *                                          текст в поле ввода
 * @param {function} props.onSelect - функция, которая будет вызвана, когда пользователь
 *                                    выберет аэропорт из списка
 * @param {function} props.handleFocus - функция, которая будет вызвана, когда поле ввода
 *                                        получит фокус
 * @param {function} props.handleBlur - функция, которая будет вызвана, когда поле ввода
 *                                       потеряет фокус
 * @param {function} props.handleKeyDown - функция, которая будет вызвана, когда пользователь
 *                                          нажмёт клавишу, когда поле ввода имеет фокус
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

  // Мемоизация отфильтрованных данных и флаг hasMoreResults
  const {memoizedFilteredData, hasMoreResults} = useMemo( () => {
    const slicedData = filteredData.slice( 0, 3 ); // Убедимся, что ограничение применяется
    const hasMoreResults = filteredData.length > 3; // Проверяем, есть ли дополнительные результаты
    return {memoizedFilteredData: slicedData, hasMoreResults};
  }, [filteredData] );

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
          aria-owns={`${field}-listbox`}
        />
      </div>
      {isOpen && (
        <Dropdown
          filteredData={memoizedFilteredData}
          field={field}
          onSelect={onSelect}
          focusedIndex={focusedIndex}
          hasMoreResults={hasMoreResults}
        />
      )}
    </div>
  );
}