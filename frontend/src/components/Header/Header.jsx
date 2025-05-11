import Button from "../Buttons/Button.jsx";
import styles from './Header.module.scss';
import logo from '../../images/logo.svg';
import logoMobile from '../../images/logoMobile.svg';
import { useLanguage } from "../../context/LanguageContext.jsx";
import { useEffect, useState } from "react";

export default function Header () {
  const {language, changeLanguage} = useLanguage()
  const [isMenuOpen, setIsMenuOpen] = useState( false )
  const [isMobile, setIsMobile] = useState( false )

  const toggleMenu = () => {
    setIsMenuOpen( !isMenuOpen )
  }

  useEffect( () => {
    const mediaQuery = window.matchMedia( '(max-width: 480.98px)' );
    setIsMobile( mediaQuery.matches );
    const handleResize = (e) => {
      setIsMobile( e.matches )
    }

    mediaQuery.addEventListener( 'change', handleResize );
    return () => {
      mediaQuery.removeEventListener( 'change', handleResize );
    }
  }, [] );

  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__body}>
          <a
            href="/"
            rel="noopener noreferrer"
            aria-label={'Home'}
            title={'Home'}
          >
            <img
              className={styles.header__logo_desktop}
              src={logo}
              alt="Meet and greet"
              width={171}
              height={35}
            />
            <img
              className={styles.header__logo_mobile}
              src={logoMobile}
              alt="Meet and greet"
              width={46}
              height={50}
            />
          </a>
          <div className={styles.header__overlay}>
            <nav className={styles.header__menu}>
              <div className={styles.header__fastBooking}>
                <Button
                  to={'/fast-booking'}
                  text={isMobile ? '' : 'Fast Booking'}
                  icon={'airplane'}
                  noBackground={true}
                  aria-label={'Fast Booking'}
                />
              </div>
              <ul className={`${styles.header__menu_list} ${isMenuOpen ? styles.open : ''}`}>
                <li>
                  <Button
                    to={'/services'}
                    text={'Services +'}
                  />
                </li>
                <li>
                  <Button
                    to={'/travelers'}
                    text={'Travelers +'}
                  />
                </li>
                <li className={styles.header__menu_container}>
                  <div className={styles.header__menu_container_action}>
                    <Button
                      to={"tel:+79036662213"}
                      icon={'phone'}
                      noBackground={true}
                      aria-label={'Contact Us'}
                    />
                  </div>
                  <div className={styles.header__menu_container_action}>
                    <Button
                      to={'/profile'}
                      icon={'person'}
                      noBackground={true}
                      aria-label={'User Profile'}
                    />
                  </div>
                </li>
              </ul>
              <ul className={styles.header__menu_actions}>
                <li>
                  <Button
                    text={'Ru'}
                    noBackground={true}
                    onClick={() => changeLanguage( 'ru' )}
                    className={`${styles.languageButton} ${
                      language === "ru"
                        ? styles.active
                        : ""
                    }`}
                  />
                </li>
                <li>
                  <Button
                    text={'En'}
                    noBackground={true}
                    onClick={() => changeLanguage( 'en' )}
                    className={`${styles.languageButton} ${
                      language === "en"
                        ? styles.active
                        : ""
                    }`}
                  />
                </li>
                <li className={styles.header__menu_container_action_desktop}>
                  <Button
                    to={"tel:+79036662213"}
                    icon={'phone'}
                    noBackground={true}
                    aria-label={'Contact Us'}
                  />
                </li>
                <li className={styles.header__menu_container_action_desktop}>
                  <Button
                    to={'/profile'}
                    icon={'person'}
                    noBackground={true}
                    aria-label={'User Profile'}
                  />
                </li>
                <li className={styles.header__menu_hamburger}>
                  <Button
                    onClick={toggleMenu}
                    icon={isMenuOpen ? 'closeMenu' : 'burgerMenu'}
                    noBackground={true}
                    aria-label={'Menu'}
                  />
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}