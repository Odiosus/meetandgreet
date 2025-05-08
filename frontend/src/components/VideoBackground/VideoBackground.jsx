import { useEffect, useRef, useState } from "react";
import styles from "./VideoBackground.module.scss";
import cloudBgMp4 from "../../images/background_hero/cloud_bg.mp4";
import cloudBgImage from "../../images/background_hero/cloud_bg.jpg";


/**
 * Компонент видеофона на странице
 * @param {React.ReactElement} children - контент, который будет отображаться поверх видео
 * @returns {React.ReactElement} - компонент видеофона
 */
export default function VideoBackground ({children}) {
  /**
   * Ссылка на тег video
   * @type {React.RefObject<HTMLVideoElement>}
   */
  const videoRef = useRef( null );

  /**
   * Флаг, который указывает, можно ли отображать видео
   * @type {boolean}
   */
  const [showVideo, setShowVideo] = useState( false );

  /**
   * Устанавливает прослушку события canplay на видео
   * @param {HTMLVideoElement} video - видео
   */
  useEffect( () => {
    const video = videoRef.current;

    /**
     * Обработчик события canplay
     */
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
