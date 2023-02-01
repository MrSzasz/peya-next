import styles from "./MainButton.module.scss";

const MainButton = ({
  href = "#",
  id,
  color = "buttonWhite",
  text = "CTA",
  fn,
}) => {
  return (
    <>
      {href === "tableAction" ? (
        <button id={id} className={`${styles.mainButton} ${styles[color]}`}>
          {text}
        </button>
      ) : (
        <button
          id={id}
          className={`${styles.mainButton} ${styles[color]}`}
          onClick={fn}
        >
          {text}
        </button>
      )}
    </>
  );
};

export default MainButton;
