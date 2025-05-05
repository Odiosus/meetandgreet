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