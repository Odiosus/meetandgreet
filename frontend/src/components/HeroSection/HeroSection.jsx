import styles from './HeroSection.module.scss';

export default function HeroSection () {
  return (
    <section className={styles.hero}>
      <div className={styles.hero__heroContent}>
        <h1>VIP SERVICES</h1>
        <h3>AT ALL AIRPORTS AROUND THE WORLD</h3>
      </div>
    </section>
  );
}