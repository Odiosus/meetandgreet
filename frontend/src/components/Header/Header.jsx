import styles from './Header.module.scss';
import logo from '../../images/logo.svg';


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
        </div>
      </header>
    </>
  );
}