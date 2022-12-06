import styles from "./MainButton.module.scss";

const MainButton = ({ color = "buttonWhite" }) => {
  return (
    <button className={`${styles.mainButton} ${styles[color]}`}>
      Pedir Ya
    </button>
  );
};

export default MainButton;
