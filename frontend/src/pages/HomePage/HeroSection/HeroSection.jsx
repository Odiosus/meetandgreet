import styles from './HeroSection.module.scss';
import AccentHeading from "../AccentHeading/AccentHeading.jsx";
import AirportSearch from "../AirportSearch/AirportSearch.jsx";
import SearchSection from "../SearchSection/SearchSection.jsx";

export default function HeroSection () {
  return (
    <section className={styles.hero}>
      <div className={styles.hero__heroContent}>
        <h1 className={styles.hero__heroContent_title}>VIP SERVICES</h1>
        <AccentHeading
          tag={'h3'}
          accentWords={['AROUND']}>
          AT ALL AIRPORTS AROUND THE WORLD
        </AccentHeading>
        <AirportSearch/>
        <SearchSection/>
      </div>
    </section>
  );
}