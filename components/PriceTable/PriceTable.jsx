import TableRow from "../TableRow/TableRow";
import styles from "./PriceTable.module.scss";

const PriceTable = () => {
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
            A partir del año 2, US$50.00 con posibilidad de bonificación
          </p>
        </div>
      </div>
      <TableRow
        type={"Cargo por reposición (deteriorada)"}
        price={"¡Gratis!"}
      />
      <TableRow
        type={"Cargo por investigación de reclamos"}
        price={"¡Gratis!"}
      />
      <TableRow type={"Tasa de interés anual"} price={"20%"} />
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
  );
};

export default PriceTable;
