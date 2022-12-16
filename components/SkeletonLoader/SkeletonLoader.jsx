import styles from "./SkeletonLoader.module.scss";

const SkeletonLoader = ({ locationClass }) => {
  return (
    <section>
      <div className={`${styles.skeletonContainer} ${styles[locationClass]}`}>
        <div className={styles.skeletonLeft}>
          <div className={styles.skeletonTitle}></div>
          <div className={styles.skeletonSubtitle}></div>
          <div className={styles.skeletonSubtitle}></div>
          <div className={styles.skeletonSubtitle}></div>
        </div>
        <div className={styles.skeletonRight}></div>
      </div>
    </section>
  );
};

export default SkeletonLoader;
