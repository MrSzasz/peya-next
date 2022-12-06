import styles from "./MainButton.module.scss";

const MainButton = ({ color = "buttonWhite", text = "Pedir Ya" }) => {
  return (
    <button className={`${styles.mainButton} ${styles[color]}`}>{text}</button>
  );
};

export default MainButton;
