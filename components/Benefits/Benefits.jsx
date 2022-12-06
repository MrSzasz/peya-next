import ItemBenefit from "../ItemBenefit/ItemBenefit";
import MainButton from "../MainButton/MainButton";
import styles from "./Benefits.module.scss";

const Benefits = () => {
  return (
    <section className={styles.benefitsContainer}>
      <div className={styles.rightBenefits}>
        <h2>La tarjeta hecha a tu manera</h2>
        <div className={styles.benefitsList}>
          <ItemBenefit text={"Sin burocracia y 100% digital"}/>
          <ItemBenefit text={"Visa Internacional"}/>
          <ItemBenefit text={"Con beneficios y descuentos"}/>
        </div>
        <MainButton color="buttonBlue" />
      </div>
      <img src="" alt="Mujer con tarjeta virtual" />
    </section>
  );
};

export default Benefits;
