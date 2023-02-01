import PriceTable from "../PriceTable/PriceTable";
import styles from "./Prices.module.scss";

const Prices = () => {
  return (
    <section id="pricesSection" className={styles.pricesContainer}>
      <h2>Sección 6</h2>
      <h3>Lorem ipsum dolor sit amet consectetur</h3>
      <PriceTable />
    </section>
  );
};

export default Prices;
