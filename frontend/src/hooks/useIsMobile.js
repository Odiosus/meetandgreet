import { useEffect, useState } from "react";

/**
 * Хук для определения является ли устройство мобильным.
 * @function
 * @param {number} [maxWidth=480.98] - максимальная ширина экрана,
 *                                      при которой устройство считается мобильным (px).
 * @returns {boolean} - является ли устройство мобильным.
 *
 * @example
 * import { useIsMobile } from "../hooks/useIsMobile";
 *
 * function MyComponent() {
 *   const isMobile = useIsMobile();
 *
 *   return (
 *     <div>
 *       {isMobile ? (
 *         <p>Это мобильное устройство</p>
 *       ) : (
 *         <p>Это не мобильное устройство</p>
 *       )}
 *     </div>
 *   );
 * }
 */
export const useIsMobile = (maxWidth = 480.98) => {
  const [isMobile, setIsMobile] = useState( false );

  useEffect( () => {
    const mediaQuery = window.matchMedia( `(max-width: ${maxWidth}px)` );
    setIsMobile( mediaQuery.matches );

    const handleResize = (e) => {
      setIsMobile( e.matches );
    };

    mediaQuery.addEventListener( 'change', handleResize );
    return () => {
      mediaQuery.removeEventListener( 'change', handleResize );
    };
  }, [maxWidth] );

  return isMobile;
};