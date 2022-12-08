// import "/loader.js";
import $ from "jquery";
import MainButton from "../MainButton/MainButton";
import PriceTable from "../PriceTable/PriceTable";
import styles from "./Prices.module.scss";
import { useEffect } from "react";

const Prices = () => {
  const showFullTable = () => {
    // console.log($(".hiddenRowsTable"))
    // $(".hiddenRowsTable").hide()

    console.log(document.querySelector(".hiddenRowsTable"));
  };

  return (
    <section className={styles.pricesContainer}>
      <h2>Costos</h2>
      <h3>La tarjeta con la tasa más baja del mercado</h3>
      <PriceTable />
    </section>
  );
};

export default Prices;
