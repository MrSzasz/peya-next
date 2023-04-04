import Link from "next/link";
import styles from "./MainButton.module.scss";
import { isMobile } from "react-device-detect";
import { useAppContext } from "../../context/AppContext";

const MainButton = ({
  href = "#",
  id,
  color = "buttonWhite",
  text = "Pedir Ya",
  fn,
  component,
}) => {
  const { componentLoaded } = useAppContext();

  return (
    <>
      {href === "tableAction" ? (
        <button
          id={id}
          className={`${styles.mainButton} ${styles[color]}`}
          onClick={() => {
            componentLoaded(
              "clickedButtons",
              "sessionID",
              null,
              "cobranded_costs_see_more.clicked"
            );
          }}
        >
          {text}
        </button>
      ) : !isMobile && fn ? (
        <button
          id={id}
          className={`${styles.mainButton} ${styles[color]}`}
          onClick={() => {
            fn();
            componentLoaded(
              "clickedButtons",
              "screenName",
              component,
              "cobranded_request.clicked"
            );
          }}
        >
          {text}
        </button>
      ) : (
        <Link
          href={href}
          id={id}
          className={`${styles.mainButton} ${styles[color]}`}
          onClick={() =>
            componentLoaded(
              "clickedButtons",
              "screenName",
              component,
              "cobranded_request.clicked"
            )
          }
        >
          {text}
        </Link>
      )}
    </>
  );
};

export default MainButton;
