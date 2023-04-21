import Link from "next/link";
import styles from "./MainButton.module.scss";
import { isMobile } from "react-device-detect";
// import { useAppContext } from "../../context/AppContext";
import TagManager from "react-gtm-module";

const MainButton = ({
  href = "#",
  id,
  color = "buttonWhite",
  text = "Pedir Ya",
  fn,
  component,
}) => {
  // const { componentLoaded } = useAppContext();

  const GTMClickTable = () => {
    const userId = localStorage.getItem("sessionId");

    const tagManagerDev = {
      dataLayer: {
        event: "cobranded_costs_see_more.clicked",
        sessionId: userId,
      },
      dataLayerName: "userLog",
    };

    TagManager.dataLayer(tagManagerDev);
  };

  const GTMClick = (componentName) => {

    const tagManagerDev = {
      dataLayer: {
        event: "cobranded_request.clicked",
        screenName: componentName,
      },
      dataLayerName: "userLog",
    };

    TagManager.dataLayer(tagManagerDev);
  };

  return (
    <>
      {href === "tableAction" ? (
        <button
          id={id}
          className={`${styles.mainButton} ${styles[color]}`}
          onClick={() => {
            GTMClickTable();
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
            GTMClick(component);
          }}
        >
          {text}
        </button>
      ) : (
        <Link
          href={href}
          id={id}
          className={`${styles.mainButton} ${styles[color]}`}
          onClick={() => GTMClick(component)}
        >
          {text}
        </Link>
      )}
    </>
  );
};

export default MainButton;
