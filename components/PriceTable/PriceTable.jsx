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
        <p className={styles.tableRowLeft}>Lorem</p>
        <div className={styles.tableRowRight}>
          <span>
            Lorem ipsum
            <br />
          </span>
          <p className={styles.underlineFirstRow}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit
          </p>
        </div>
      </div>
      <TableRow
        type={"Lorem ipsum dolor sit amet consectetur"}
        price={"Lorem"}
        special={true}
      />
      <TableRow
        type={"Lorem ipsum dolor sit "}
        price={"Lorem"}
        special={true}
      />
      <TableRow type={"Lorem ipsum dolor"} price={"22%"} />

      <div
        id="hiddenTableId"
        className={styles.hiddenRowsTable}
        data-toggled={"closed"}
      >
        <TableRow type={"Lorem ipsum"} price={"22 días"} />
        <TableRow
          type={"Lorem ipsum dolor sit amet"}
          price={"US$1"}
        />
        <TableRow
          type={"Lorem ipsum dolor sit"}
          price={"US$1"}
        />
        <TableRow
          type={"Lorem ipsum dolor sit amet consectetur"}
          price={"1%"}
        />
        <TableRow type={"Lorem ipsum dolor"} price={"US$22.00"} />
        <TableRow
          type={"Lorem ipsum dolor sit amet"}
          price={"US$22.00"}
        />
        <TableRow
          type={"Lorem ipsum dolor sit amet consectetur adipisicing elit"}
          price={"US$22.00"}
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
