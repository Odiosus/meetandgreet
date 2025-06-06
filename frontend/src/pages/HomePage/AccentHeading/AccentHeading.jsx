import { createElement } from "react";
import styles from './AccentHeading.module.scss';


/**
 * @function
 * @name AccentHeading
 * @description
 *   Компонент акцентирующего заголовка
 *
 * @param {Object} props - Объект с параметрами компонента
 * @param {string} [props.tag=h3] - Тег заголовка
 * @param {string[]} [props.accentWords=[]] - Массив акцентируемых слов
 * @param {string} props.children - Текст заголовка
 * @param {string} [props.className=''] - CSS-класс для компонента
 *
 * @returns {JSX.Element} - Компонент JSX-элемента акцентирующего заголовка
 *
 * @example
 *   <AccentHeading accentWords={['hello', 'world']} >Hello World</AccentHeading>
 */
export default function AccentHeading ({tag = 'h3', accentWords = [], children, className = ''}) {
  const words = children.split( ' ' );

  const formattedText = words.map( (word, index) => {
    const isAccent = accentWords.includes( word.toUpperCase() || word.toLowerCase() );
    return (
      <span
        key={`${word}-${index}`}
        className={isAccent ? styles.accent : ''}
      >
        {word}{' '}
      </span>
    );
  } );

  return createElement(
    tag,
    {className: `${styles.heading} ${className}`},
    formattedText
  );
}