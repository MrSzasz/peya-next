import { TailSpin } from "svg-loaders-react";
import styles from "./Loading.module.scss";

const Loading = () => {
  return (
    <div className={styles.loadingContainer}>
      <TailSpin width={60} height={60} />
      <p>Cargando...</p>
    </div>
  );
};

export default Loading;
