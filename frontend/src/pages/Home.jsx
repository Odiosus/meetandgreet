import Header from '../components/Header/Header.jsx';
import HeroSection from "../components/HeroSection/HeroSection.jsx";
import VideoBackground from "../components/VideoBackground/VideoBackground.jsx";
import styles from './Home.module.scss';
import ServiceSection from "../components/ServiceSection/ServiceSection.jsx";

export default function Home () {
  return (
    <>
      <main className={styles.main}>
        <VideoBackground>
          <Header/>
          <HeroSection/>
        </VideoBackground>
        <ServiceSection/>
      </main>
    </>
  );
}