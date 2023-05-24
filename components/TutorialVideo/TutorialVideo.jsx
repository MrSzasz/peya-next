import React from "react";
import styles from "./TutorialVideo.module.scss";

const TutorialVideo = () => {
  return (
    <section className={styles.membershipContainer}>
      <h2>Conócenos</h2>
      <div className={styles.videoResponsive}>
        <div className={styles.iframeContainer}>
        <iframe
          width="853"
          height="480"
          src={`https://www.youtube.com/embed/AyOOFLsE9wI`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
        </div>
      </div>
    </section>
  );
};

export default TutorialVideo;
