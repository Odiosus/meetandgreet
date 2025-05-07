import { Link } from "react-router-dom";
import styles from "./Button.module.scss";

/**
 * Компонент кнопки.
 * @param {Object} props - Объект с пропсами.
 * @param {string} [props.text] - Текст кнопки.
 * @param {string} [props.to] - Если указан, то кнопка будет ссылкой на указанный URL.
 * @param {function} [props.onClick] - Функция, которая будет вызвана при клике на кнопку.
 * @param {ReactNode} [props.icon] - Иконка, которая будет отображаться на кнопке.
 * @param {boolean} [props.noBackground] - Если true, то кнопка будет иметь прозрачный фон.
 * @param {string} [props.className] - Дополнительные классы для кнопки.
 * @returns {ReactComponent} Компонент кнопки.
 */
export default function Button ({text, to, onClick, icon, noBackground, className = ''}) {
  const baseClassName = `${styles.button} ${noBackground ? styles['button-no-background'] : ''} ${className}`

  if (to) {
    return (
      <Link
        to={to}
        className={baseClassName}
      >
        {icon && <span className={styles.icon}>{icon}</span>}
        {text}
      </Link>
    )
  }
  return (
    <button
      className={baseClassName}
      onClick={onClick}
    >
      {icon && <span className={styles.icon}>{icon}</span>}
      {text}
    </button>
  );
}