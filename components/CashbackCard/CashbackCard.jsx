import Image from "next/image";
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
      {img ? (
        <div className={styles.logoImageContainer}>
          <Image
            className={`${styles.cashbackCardImage} ${styles[position]}`}
            src={img}
            alt={altImg}
            fill={true}
            style={{ objectFit: "cover" }}
          />
        </div>
      ) : null}
      <p className={styles.textBottom}>{textBottom}</p>
    </div>
  );
};

export default CashbackCard;
