import styles from './Icon.module.scss';

/**
 * Объект icons содержит определения SVG путей для различных иконок.
 * @type {Object.<string, JSX.Element>}
 * @property {JSX.Element} airplane - Иконка самолета.
 * @property {JSX.Element} phone - Иконка телефона.
 * @property {JSX.Element} person - Иконка человека.
 * @property {JSX.Element} burgerMenu - Иконка меню-бургера.
 * @property {JSX.Element} closeMenu - Иконка закрытого меню.
 */
const icons = {
  airplane: (
    <path d="M0 7.8H1.8L3.6 10.2L10.2 10.2L7.2 0L9.6 0L15.6 10.2L22.2 10.2C22.7 10.2 23.125 10.375 23.475 10.725C23.825 11.075 24 11.5 24 12C24 12.5 23.825 12.925 23.475 13.275C23.125 13.625 22.7 13.8 22.2 13.8L15.6 13.8L9.6 24H7.2L10.2 13.8L3.6 13.8L1.8 16.2H0L1.2 12L0 7.8Z"
      fill="white"/>
  ),
  phone: (
    <path d="M6.34417 10.3404C7.72417 13.0525 9.9475 15.2662 12.6596 16.6558L14.7679 14.5475C15.0267 14.2887 15.41 14.2025 15.7454 14.3175C16.8188 14.6721 17.9783 14.8637 19.1667 14.8637C19.6938 14.8637 20.125 15.295 20.125 15.8221V19.1667C20.125 19.6938 19.6938 20.125 19.1667 20.125C10.1679 20.125 2.875 12.8321 2.875 3.83333C2.875 3.30625 3.30625 2.875 3.83333 2.875H7.1875C7.71458 2.875 8.14583 3.30625 8.14583 3.83333C8.14583 5.03125 8.3375 6.18125 8.69208 7.25458C8.7975 7.59 8.72083 7.96375 8.4525 8.23208L6.34417 10.3404Z"
      fill="white"/>
  ),
  person: (
    <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z"
      fill="white"/>
  ),
  burgerMenu: (
    <path
      d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
      fill="currentColor"/>
  ),
  closeMenu: (
    <path
      d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
      fill="currentColor"
    />
  ),
}

/**
 * Компонент для отображения иконок.
 *
 * @param {Object} props - Параметры компонента.
 * @param {string} props.name - Имя иконки.
 * @param {number} [props.width=24] - Ширина иконки.
 * @param {number} [props.height=24] - Высота иконки.
 * @param {string} [props.className=''] - CSS-класс для иконки.
 * @returns {JSX.Element} - Иконка.
 */
const Icon = ({name, width = 24, height = 24, className = ''}) => {
  if (!icons[name]) {
    return null;
  }
  return (
    <svg
      className={`${styles.icon} ${className}`}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      {icons[name]}
    </svg>
  );
}

export default Icon;