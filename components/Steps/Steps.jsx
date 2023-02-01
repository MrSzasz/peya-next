import Link from "next/link";
import ItemSteps from "../ItemSteps/ItemSteps";
import styles from "./Steps.module.scss";

const Steps = () => {
  return (
    <section className={styles.stepsContainer}>
      <h2>Sección 5</h2>
      <div className={styles.itemStepsContainer}>
        <ItemSteps
          title={"Titulo"}
          text={"Lorem ipsum dolor"}
          img={"/icons/steps/icon1.svg"}
          imgAlt={"Registro"}
          special={true}
        />
        <ItemSteps
          title={"Titulo"}
          text={
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut?"
          }
          img={"/icons/steps/icon2.svg"}
          imgAlt={"Envío"}
          second={true}
        />
        <ItemSteps
          title={"Titulo"}
          text={"Lorem ipsum dolor, sit amet consectetur adipisicing elit"}
          img={"/icons/steps/icon3.svg"}
          imgAlt={"Uso"}
        />
      </div>
      <div className={styles.stepsDownloads}>
        <h3>Descarga la App</h3>
        <div className={styles.stepsDownloadsIcons}>
          <img src="/images/stepsAndroid.svg" alt="Link Google Play" />
          <img src="/images/stepsApple.svg" alt="Link App Store" />
        </div>
      </div>
    </section>
  );
};

export default Steps;
