import styles from "./TableRow.module.scss";

const TableRow = ({type, price}) => {
  return (
    <div className={styles.tableRow}>
      <p className={styles.tableRowLeft}>{type}</p>
      <p className={styles.tableRowRight}>{price}</p>
    </div>
  );
};

export default TableRow;
