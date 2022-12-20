import styles from "./CashbackCard.module.scss";

const CashbackCard = ({
  number,
  textTop,
  img,
  altImg,
  textBottom,
  position,
}) => {
  return (
    <div className={`${styles.cashbackCardContainer} ${styles[position]}`}>
      <h2>{number}%</h2>
      <p className={styles.textTop}>{textTop}</p>
      <img
        className={`${styles.cashbackCardImage} ${styles[position]}`}
        src={img}
        alt={altImg}
      />
      <p className={styles.textBottom}>{textBottom}</p>
    </div>
  );
};

export default CashbackCard;
