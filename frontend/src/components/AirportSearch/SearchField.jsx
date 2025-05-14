import styles from './AirportSearch.module.scss';

export default function SearchField ({
                                       field,
                                       label,
                                       searchTerm,
                                       selected,
                                       isOpen,
                                       filteredData,
                                       onSearchChange,
                                       onSelect,
                                     }) {


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