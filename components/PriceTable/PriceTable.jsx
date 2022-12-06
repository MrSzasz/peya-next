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
          A partir del año 2, US$50.00 con posibilidad de bonificación
        </div>
      </div>
      <TableRow />
      <TableRow />
      <TableRow />
      <TableRow />
      <TableRow />
      <TableRow />
      <TableRow />
      <TableRow />
      <TableRow />
      <TableRow />
    </div>
  );
};

export default PriceTable;
