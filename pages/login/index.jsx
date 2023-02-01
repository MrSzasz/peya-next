import Link from "next/link";
import styles from "./index.module.scss";

const index = () => {
  return (
    <div className={styles.loginContainer}>
      <h2>Iniciar sesión en el dash</h2>
      <p>
        El diseño tiene un login funcional, con su respectiva
        autoadministración, conectándose a una base de datos correctamente.
      </p>
      <Link href={"/"}>Volver al inicio</Link>
    </div>
  );
};

export default index;
