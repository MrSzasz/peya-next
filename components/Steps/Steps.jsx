import ItemSteps from "../ItemSteps/ItemSteps";
import styles from "./Steps.module.scss";

const Steps = () => {
  return (
    <section className={styles.stepsContainer}>
      <h2>Disfrutala ya</h2>
      <div className={styles.itemStepsContainer}>
        <ItemSteps title={"Registrate"} text={"Completa tus datos"} />
        <ItemSteps
          title={"Recibe"}
          text={
            "Activamos tu tarjeta virtual en el acto mientras enviamos la física en 72hs máximo"
          }
        />
        <ItemSteps
          title={"Compra ya"}
          text={"¡Listo! Pueden disfrutar de tus cashbacks todos los días"}
        />
      </div>
      <div className={styles.stepsDownloads}>
        <h3>Descarga la App</h3>
        <img src="" alt="Link Google Play" />
        <img src="" alt="Link App Store" />
      </div>
    </section>
  );
};

export default Steps;
