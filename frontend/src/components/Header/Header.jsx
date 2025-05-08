import Button from "../Buttons/Button.jsx";
import styles from './Header.module.scss';
import logo from '../../images/logo.svg';
import logoMobile from '../../images/logoMobile.svg';
import btnFastBooking from '../../assets/btn_airplane.svg';
import Phone from '../../assets/phone.svg';
import Person from '../../assets/person.svg';
import { useLanguage } from "../../context/LanguageContext.jsx";
import { useState } from "react";

export default function Header () {
  const {language, changeLanguage} = useLanguage()
  const [isMenuOpen, setIsMenuOpen] = useState( false )

  const toggleMenu = () => {
    setIsMenuOpen( !isMenuOpen )
  }

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
                  text={'Fast Booking'}
                  icon={
                    <img
                      src={btnFastBooking}
                      alt=""
                      width={24}
                      height={24}
                    />}
                  noBackground={true}
                />
              </div>
              <ul className={`${styles.header__menu_list} ${isMenuOpen ? styles.open : ''}`}>
                <li className={styles.header__menu_item}>
                  <Button
                    to={'/services'}
                    text={'Services +'}
                  />
                </li>
                <li className={styles.header__menu_item}>
                  <Button
                    to={'/travelers'}
                    text={'Travelers +'}
                  />
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
                <li className={styles.header__menu_action_hidden}>
                  <Button
                    icon={
                      <img
                        src={Phone}
                        alt=""
                        width={24}
                        height={24}
                      />}
                    noBackground={true}
                    aria-label={'Contact Us'}
                  />
                </li>
                <li className={styles.header__menu_action_hidden}>
                  <Button
                    icon={
                      <img
                        src={Person}
                        alt=""
                        width={24}
                        height={24}
                      />}
                    noBackground={true}
                    aria-label={'User Profile'}
                  />
                </li>
                <li className={styles.header__menu_hamburger}>
                  <Button
                    onClick={toggleMenu}
                    icon={
                      <span className={styles.header__menu_hamburger_icon}>
                      {isMenuOpen ? '✕' : '☰'}
                      </span>
                    }
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