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
      <Image
        className={`${styles.cashbackCardImage} ${styles[position]} w-fit h-auto`}
        src={img}
        alt={altImg}
        height={0}
        width={0}
        sizes="100vw"
      />
      <p className={styles.textBottom}>{textBottom}</p>
    </div>
  );
};

export default CashbackCard;
