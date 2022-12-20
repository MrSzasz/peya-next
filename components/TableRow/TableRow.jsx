import styles from "./TableRow.module.scss";

const TableRow = ({ type, price, special }) => {
  return (
    <div className={styles.tableRow}>
      <p className={styles.tableRowLeft}>{type}</p>
      <p
        className={special ? styles.tableRowRightSpecial : styles.tableRowRight}
      >
        {price}
      </p>
    </div>
  );
};

export default TableRow;
