import Link from "next/link";
import styles from "./MainButton.module.scss";

const MainButton = ({
  href = "#",
  id,
  color = "buttonWhite",
  text = "Pedir Ya",
}) => {
  return (
    <>
      {href === "tableAction" ? (
        <button id={id} className={`${styles.mainButton} ${styles[color]}`}>
          {text}
        </button>
      ) : (
        <Link
          href={href}
          id={id}
          className={`${styles.mainButton} ${styles[color]}`}
        >
          {text}
        </Link>
      )}
    </>
  );
};

export default MainButton;
