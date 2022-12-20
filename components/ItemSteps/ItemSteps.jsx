import styles from "./ItemSteps.module.scss";

const ItemSteps = ({ img, imgAlt, title, text, special, second }) => {
  return (
    <div className={styles.mainCard}>
      <div className={styles.mainCardImgContainer}>
        <img
          className={`${
            special ? styles.mainCardImgSpecial : styles.mainCardImg
          } ${second ? styles.mainCardImgSecond : styles.mainCardImg}`}
          src={img}
          alt={imgAlt}
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
