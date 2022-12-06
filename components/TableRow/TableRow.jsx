import styles from "./TableRow.module.scss";

const TableRow = () => {
  return (
    <div className={styles.tableRow}>
      <p className={styles.tableRowLeft}>Cargo por reposición (deteriorada)</p>
      <p className={styles.tableRowRight}>¡Gratis!</p>
    </div>
  );
};

export default TableRow;
