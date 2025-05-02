import styles from './HeroSection.module.scss';
import cloudBgMp4 from '../../images/background_hero/cloud_bg.mp4';

export default function HeroSection () {
  return (
    <section className={styles.hero}>
      <video
        className={styles.backgroundVideo}
        autoPlay
        muted
        loop
        playsInline
      >
        <source
          src={cloudBgMp4}
          type="video/mp4"/>
        Your browser does not support the video tag.
      </video>
      <div className={styles.heroContent}>

      </div>
    </section>
  );
}