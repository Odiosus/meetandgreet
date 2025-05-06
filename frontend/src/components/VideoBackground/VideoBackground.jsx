import styles from "./VideoBackground.module.scss";
import cloudBgMp4 from "../../images/background_hero/cloud_bg.mp4";


export default function VideoBackground ({children}) {
  return (
    <div className={styles.videoContainer}>
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
      {children}
    </div>
  );
}
