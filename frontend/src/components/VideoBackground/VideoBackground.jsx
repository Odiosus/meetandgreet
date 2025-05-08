import { useEffect, useRef, useState } from "react";
import styles from "./VideoBackground.module.scss";
import cloudBgMp4 from "../../images/background_hero/cloud_bg.mp4";
import cloudBgImage from "../../images/background_hero/cloud_bg.jpg";


export default function VideoBackground ({children}) {
  const videoRef = useRef( null );
  const [showVideo, setShowVideo] = useState( false )

  useEffect( () => {
    const video = videoRef.current;

    const handleCanPlay = () => {
      setShowVideo( true );
      video.play().catch( () => {
        setShowVideo( false );
      } );
    };

    if (video) {
      video.addEventListener( 'canplay', handleCanPlay );
      video.load();
    }

    return () => {
      if (video) {
        video.removeEventListener( 'canplay', handleCanPlay );
      }
    }
  }, [] );

  return (
    <div className={styles.videoContainer}>
      <img
        className={styles.backgroundImage}
        src={cloudBgImage}
        alt="Background"
      />
      <video
        ref={videoRef}
        className={`${styles.backgroundVideo} ${showVideo ? styles.visible : ''}`}
        /*autoPlay*/
        muted
        loop
        playsInline
        preload="auto"
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
