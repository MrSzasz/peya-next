import { useEffect } from "react";
import { useAppContext } from "../../context/AppContext";
import PriceTable from "../PriceTable/PriceTable";
import styles from "./Prices.module.scss";

const Prices = () => {
  const { componentLoaded } = useAppContext();

  useEffect(() => {
    componentLoaded(
      "componentLoadings",
      "sectionName",
      "Costs",
      "cobranded_section.loaded"
    );
  }, []);
  return (
    <section id="pricesSection" className={styles.pricesContainer}>
      <h2>Costos</h2>
      <h3>La tarjeta con la tasa más baja del mercado</h3>
      <PriceTable />
    </section>
  );
};

export default Prices;
