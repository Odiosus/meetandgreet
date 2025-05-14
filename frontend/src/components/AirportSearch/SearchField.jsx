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
  return (
    <div className={styles.field}>
      <label>{label}</label>
      <input
        type="text"
        value={selected || searchTerm}
        onChange={(e) => onSearchChange( field, e.target.value )}
        onFocus={() => isOpen && searchTerm.length >= 3}
        placeholder="Type to search..."
        className={styles.input}
      />
      {isOpen && searchTerm.length >= 3 && (
        <ul className={styles.dropdown}>
          {filteredData.map( item => (
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