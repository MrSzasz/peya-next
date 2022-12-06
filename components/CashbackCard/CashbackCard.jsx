import styles from "./CashbackCard.module.scss";

const CashbackCard = ({number, textTop, img, altImg, textBottom}) => {
  return (
    <div className={styles.cashbackCardContainer}>
      <h2>{number}%</h2>
      <p className={styles.textTop}>{textTop}</p>
      <img src={img} alt={altImg} />
      <p className={styles.textBottom}>{textBottom}</p>
    </div>
  );
};

export default CashbackCard;
