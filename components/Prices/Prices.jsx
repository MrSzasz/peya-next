import MainButton from "../MainButton/MainButton";
import PriceTable from "../PriceTable/PriceTable";
import styles from "./Prices.module.scss";

const Prices = () => {
  return (
    <section>
      <h2>Costos</h2>
      <h3>La tarjeta con la tasa más baja del mercado</h3>
      <PriceTable />
      <div className={styles.tableButtonContainer}>
        <MainButton />
      </div>
    </section>
  );
};

export default Prices;
