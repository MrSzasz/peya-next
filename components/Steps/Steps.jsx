import ItemSteps from "../ItemSteps/ItemSteps";
import styles from './Steps.module.scss'

const Steps = () => {
  return (
    <section className={styles.stepsContainer}>
      <h2>Disfrutala ya</h2>
      <div className={styles.itemStepsContainer}>
        <ItemSteps />
        <ItemSteps />
        <ItemSteps />
      </div>
      <div className={styles.stepsDownloads}>
        <p>Descarga la app</p>
        <img src="" alt="Link Google Play" />
        <img src="" alt="Link App Store" />
      </div>
    </section>
  );
};

export default Steps;
