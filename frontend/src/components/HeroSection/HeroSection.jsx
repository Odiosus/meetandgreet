import styles from './HeroSection.module.scss';
import AccentHeading from "../AccentHeading/AccentHeading.jsx";

export default function HeroSection () {
  return (
    <section className={styles.hero}>
      <div className={styles.hero__heroContent}>
        <h1>VIP SERVICES</h1>
        <AccentHeading
          tag={'h3'}
          accentWords={['AROUND']}>
          AT ALL AIRPORTS AROUND THE WORLD
        </AccentHeading>
      </div>
    </section>
  );
}