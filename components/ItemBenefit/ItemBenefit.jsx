import styles from "./ItemBenefit.module.scss";

const ItemBenefit = ({ img, imgAlt, text }) => {
  return (
    <div className={styles.itemBenefitContainer}>
      <img src={img} alt={imgAlt} />
      <p>{text}</p>
    </div>
  );
};

export default ItemBenefit;
