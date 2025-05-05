import styles from './Header.module.scss';
import logo from '../../images/logo.svg';
import btnFastBooking from '../../assets/btn_airplane.svg';
import Button from "../Buttons/Button.jsx";


export default function Header () {
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
              src={logo}
              alt=""
              width={171}
              height={35}
            />
          </a>
          <div className={styles.header__overlay}>
            <nav className={styles.header__menu}>
              <ul className={styles.header__menu_list}>
                <li className={styles.header__menu_item}>
                  <a
                    className={styles.header__menu_link}
                    href={'#'}
                    rel="noopener noreferrer"
                    target={'_blank'}
                  >
                    <button
                      className={styles.header__menu_button}
                      type={'button'}>
                      <span>
                        <img
                          className={styles.header__menu_image}
                          src={btnFastBooking}
                          alt=""
                          width={52}
                          height={40}
                        />
                      </span>
                      <span className={styles.header__menu_text}>
                        Fast Booking
                      </span>
                    </button>
                  </a>
                </li>
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
                <li></li>
                <li></li>
              </ul>
            </nav>

          </div>
        </div>
      </header>
    </>
  );
}