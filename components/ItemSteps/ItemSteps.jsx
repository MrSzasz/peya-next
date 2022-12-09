import styles from "./ItemSteps.module.scss";

const ItemSteps = ({ img, imgAlt, title, text }) => {
  return (
    <div className={styles.mainCard}>
      <img src={img} alt={imgAlt} />
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
};

export default ItemSteps;
