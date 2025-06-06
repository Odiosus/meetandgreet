import styles from './ServiceSection.module.scss';
import AccentHeading from "../AccentHeading/AccentHeading.jsx";
import ServiceCards from "../ServiceCards/ServiceCards.jsx";

export default function ServiceSection () {
  return (
    <section className={styles.serviceSection}>
      <div className={styles.serviceSection__title}>
        <AccentHeading
          tag={'h2'}
          accentWords={['SERVICES', 'AROUND', 'THAN']}>
          OUR SERVICES PRESENTED IN MORE
          THAN 1000 AIRPORTS AROUND THE WORLD
        </AccentHeading>
        <ServiceCards/>
      </div>

    </section>
  );
}