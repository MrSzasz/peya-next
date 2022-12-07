import ItemBenefit from "../ItemBenefit/ItemBenefit";
import MainButton from "../MainButton/MainButton";
import styles from "./Benefits.module.scss";

const Benefits = () => {
  return (
    <section className={styles.benefitsContainer}>
      <div className={styles.rightBenefits}>
        <h2>La tarjeta hecha a tu manera</h2>
        <div className={styles.benefitsList}>
          <ItemBenefit
            text={"Sin burocracia y 100% digital"}
            img={"/icons/benefits/icon1.svg"}
            alt={"Icono sin burocracia"}
          />
          <ItemBenefit
            text={"Visa Internacional"}
            img={"/icons/benefits/icon2.svg"}
            alt={"Icono internacional"}
          />
          <ItemBenefit
            text={"Con beneficios y descuentos"}
            img={"/icons/benefits/icon3.svg"}
            alt={"Icono descuentos"}
          />
        </div>
        <MainButton color="buttonBlue" />
      </div>
      <img src="/images/benefitsImg.png" alt="Mujer con tarjeta virtual" />
    </section>
  );
};

export default Benefits;
