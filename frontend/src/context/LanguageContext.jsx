import { createContext, useContext, useState } from "react";

/**
 * Контекст языка
 * @type {React.Context<{language: string, changeLanguage: (lang: string) => void}>}
 */
const LanguageContext = createContext();

/**
 * @function
 * @name LanguageProvider
 * @description
 *   Provider для контекста языка, который
 *   позволяет хранить информацию о языке
 *   и изменять ее
 *
 * @param {React.ReactNode} children
 *   Рекомендуется оборачивать в LanguageProvider
 *   компонент App
 *
 * @returns {JSX.Element}
 *   Компонент LanguageContext.Provider
 *   со значением контекста
 */
export function LanguageProvider ({children}) {
  /**
   * @type {string}
   * @description
   *   Текущий язык
   */
  const [language, setLanguage] = useState( 'en' );

  /**
   * @function
   * @name changeLanguage
   * @description
   *   Изменяет язык
   *
   * @param {string} lang
   *   Новый язык
   */
  const changeLanguage = (lang) => {
    setLanguage( lang );
  }

  return (
    <LanguageContext.Provider value={{language, changeLanguage}}>
      {children}
    </LanguageContext.Provider>
  );
}

/**
 * @function
 * @name useLanguage
 * @description
 *   Использует контекст LanguageContext для получения текущего языка и функции изменения языка.
 *
 * @returns {Object}
 *   Объект, содержащий текущий язык и функцию для его изменения.
 */
export function useLanguage() {
  return useContext(LanguageContext);
}