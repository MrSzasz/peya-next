import PriceTable from "../PriceTable/PriceTable";
import styles from "./Prices.module.scss";

const Prices = () => {
  return (
    <section className={styles.pricesContainer}>
      <h2>Costos</h2>
      <h3>La tarjeta con la tasa más baja del mercado</h3>
      <PriceTable />
    </section>
  );
};

export default Prices;
