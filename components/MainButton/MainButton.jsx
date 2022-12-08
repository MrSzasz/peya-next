import styles from "./MainButton.module.scss";

const MainButton = ({ id, color = "buttonWhite", text = "Pedir Ya" }) => {
  return (
    <button id={id} className={`${styles.mainButton} ${styles[color]}`}>
      {text}
    </button>
  );
};

export default MainButton;
