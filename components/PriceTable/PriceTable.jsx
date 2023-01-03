import $, { data } from "jquery";
import { useEffect, useState } from "react";
import MainButton from "../MainButton/MainButton";
import TableRow from "../TableRow/TableRow";
import styles from "./PriceTable.module.scss";

const PriceTable = () => {
  const [dataText, setDataText] = useState(false);

  useEffect(() => {
    $("#showFullTableButton").on("click", () => {
      setDataText((current) => !current);
      $("#hiddenTableId").slideToggle(1000);
    });
  }, []);

  return (
    <div className={styles.priceTableContainer}>
      <div className={styles.tableRow}>
        <p className={styles.tableRowLeft}>Membresía</p>
        <div className={styles.tableRowRight}>
          <span>
            ¡Gratis por 1 año!
            <br />
          </span>
          <p className={styles.underlineFirstRow}>
            A partir del año 2, US$50.00 con posibilidad de exoneración
          </p>
        </div>
      </div>
      <TableRow
        type={"Cargo por reposición (deteriorada)"}
        price={"¡Gratis!"}
        special={true}
      />
      <TableRow
        type={"Cargo por investigación de reclamos"}
        price={"¡Gratis!"}
        special={true}
      />
      <TableRow type={"Tasa de interés anual"} price={"20%"} />

      <div
        id="hiddenTableId"
        className={styles.hiddenRowsTable}
        data-toggled={"closed"}
      >
        <TableRow type={"Tiempo de financiamiento"} price={"60 días"} />
        <TableRow
          type={"Seguro contra robo y fraude (mensual)"}
          price={"US$3,50"}
        />
        <TableRow
          type={"Seguro de vida (sobre saldo adeudado)"}
          price={"US$2.47 por cada US$1,000.00 de saldo adeudado o fracción"}
        />
        <TableRow
          type={"Cargo por pago atrasado"}
          price={"4% del saldo adeudado, máximo US$25.00"}
        />
        <TableRow type={"Comisión sobregiro"} price={"US$20.00"} />
        <TableRow
          type={"Cargo por reposición (pérdida o robada)"}
          price={"US$15.00"}
        />
        <TableRow
          type={"Cargo por compra de saldo (Refinanciamiento)"}
          price={"US$25.00"}
        />
      </div>
      <div className={styles.tableButtonContainer}>
        <MainButton
          href={"tableAction"}
          id="showFullTableButton"
          color="buttonNoBg"
          text={dataText ? "Ver menos" : "Ver más costos"}
        />
      </div>
    </div>
  );
};

export default PriceTable;
