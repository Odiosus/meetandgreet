import styles from './AirportSearch.module.scss';

/**
 * Компонент SearchField отображает поле ввода для поиска аэропортов с выпадающим списком автодополнения.
 * Используется в составе формы поиска (например, AirportSearch) для выбора аэропортов (отправления, транзита, прибытия).
 * Поддерживает интерактивную метку, которая изменяет стиль при наличии значения, и выпадающий список с отфильтрованными результатами.
 *
 * @component
 * @example
 * ```jsx
 * import { useAirportSearch } from '../../hooks/useAirportSearch';
 * import airports from '../../data/airports';
 *
 * const fields = ['departure'];
 * const { searchTerms, selected, isOpen, getFilteredData, handleSearchChange, handleSelect } = useAirportSearch(fields, airports);
 *
 * <SearchField
 *   field="departure"
 *   label="Departure"
 *   searchTerm={searchTerms.departure}
 *   selected={selected.departure}
 *   isOpen={isOpen.departure}
 *   filteredData={getFilteredData(searchTerms.departure)}
 *   onSearchChange={handleSearchChange}
 *   onSelect={handleSelect}
 * />
 * ```
 */
export default function SearchField ({
                                       /**
                                        * Уникальный идентификатор поля (например, 'departure', 'arrival').
                                        * Используется для связи метки и поля ввода через htmlFor и id.
                                        * @type {string}
                                        */
                                       field,

                                       /**
                                        * Текст метки, отображаемый над полем ввода (например, 'Departure').
                                        * @type {string}
                                        */
                                       label,

                                       /**
                                        * Текущий поисковый запрос, введённый пользователем.
                                        * @type {string}
                                        * @example 'Lon' // Частичный ввод для поиска аэропорта
                                        */
                                       searchTerm,

                                       /**
                                        * Выбранное значение (например, 'London Heathrow (LHR)').
                                        * Если задано, отображается вместо searchTerm.
                                        * @type {string}
                                        * @example 'London Heathrow (LHR)'
                                        */
                                       selected,

                                       /**
                                        * Флаг, указывающий, открыт ли выпадающий список с результатами поиска.
                                        * @type {boolean}
                                        */
                                       isOpen,

                                       /**
                                        * Массив отфильтрованных данных для выпадающего списка.
                                        * Каждый элемент — объект с информацией об аэропорте.
                                        * @type {Array<{ name: string, code: string, city: string }>}
                                        * @example [{ name: 'London Heathrow', code: 'LHR', city: 'London' }]
                                        */
                                       filteredData,

                                       /**
                                        * Callback для обработки изменений в поле ввода.
                                        * Вызывается при каждом изменении текста в input.
                                        * @type {(field: string, value: string) => void}
                                        * @example
                                        * onSearchChange('departure', 'LHR');
                                        */
                                       onSearchChange,

                                       /**
                                        * Callback для обработки выбора элемента из выпадающего списка.
                                        * Вызывается при клике на элемент списка.
                                        * @type {(item: { name: string, code: string, city: string }, field: string) => void}
                                        * @example
                                        * onSelect({ name: 'London Heathrow', code: 'LHR', city: 'London' }, 'departure');
                                        */
                                       onSelect,
                                     }) {
  /**
   * Флаг, указывающий, есть ли значение в поле (либо selected, либо searchTerm).
   * Используется для стилизации метки.
   * @type {boolean}
   */
  const hasValue = selected || searchTerm;

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
          onFocus={() => isOpen && searchTerm.length >= 3}
          className={styles.input}
        />
      </div>
      {isOpen && searchTerm.length >= 3 && (
        <ul className={styles.dropdown}>
          {filteredData.map( (item) => (
            <li
              key={item.code}
              onClick={() => onSelect( item, field )}
              className={styles.dropdownItem}
            >
              {item.name} ({item.code}) - {item.city}
            </li>
          ) )}
        </ul>
      )}
    </div>
  );
}