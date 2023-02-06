import Image from "next/image";
import styles from "./ItemSteps.module.scss";

const ItemSteps = ({ img, imgAlt, title, text, special, second }) => {
  return (
    <div className={styles.mainCard}>
      <div className={styles.mainCardImgContainer}>
        <Image
          className={`${
            special ? styles.mainCardImgSpecial : styles.mainCardImg
          } ${second ? styles.mainCardImgSecond : styles.mainCardImg} w-full h-auto`}
          src={img}
          alt={imgAlt}
          height={0}
          width={0}
          quality={100}
          sizes="100vw"
        />
      </div>
      <div className={styles.mainCardBottomText}>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default ItemSteps;
