import Header from '../components/Header/Header.jsx';
import HeroSection from "../components/HeroSection/HeroSection.jsx";
import styles from './Home.module.scss';

export default function Home () {
  return (
    <>
      <main className={styles.main}>
        <Header/>
        <HeroSection/>
      </main>
    </>
  );
}