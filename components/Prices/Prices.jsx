import { useEffect } from "react";
// import { useAppContext } from "../../context/AppContext";
import PriceTable from "../PriceTable/PriceTable";
import styles from "./Prices.module.scss";
import TagManager from "react-gtm-module";

const Prices = () => {
  // const { componentLoaded } = useAppContext();

  useEffect(() => {
    const tagManagerDev = {
      dataLayer: {
        event: "cobranded_section.loaded",
        sectionName: "Costs",
      },
      dataLayerName: "userLog",
    };

    TagManager.dataLayer(tagManagerDev);

    // componentLoaded(
    //   "componentLoadings",
    //   "sectionName",
    //   "Costs",
    //   "cobranded_section.loaded"
    // );
  }, []);
  return (
    <section id="pricesSection" className={styles.pricesContainer}>
      <h2>Costos</h2>
      <h3>Las mejores tarifas y sin costos ocultos.</h3>
      <PriceTable />
    </section>
  );
};

export default Prices;
