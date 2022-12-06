import ItemBenefit from "../ItemBenefit/ItemBenefit";
import MainButton from "../MainButton/MainButton";
import styles from "./Benefits.module.scss"

const Benefits = () => {
  return (
    <section className={styles.benefitsContainer}>
      <div className={styles.rightBenefits}>
        <h2>La tarjeta hecha a tu manera</h2>
        <div>
          <ItemBenefit />
          <ItemBenefit />
          <ItemBenefit />
        </div>
        <MainButton />
      </div>
      <img src="" alt="Mujer con tarjeta virtual" />
    </section>
  );
};

export default Benefits;
