import Link from "next/link";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a href="#hero">
        <img src="/demo/logo.png" alt="Logo PedidosYa Pagos" />
      </a>
      <p className={styles.disclaimer}>Tomas Leandro Lugo - Front End Dev</p>
      <div className={styles.centerFooterContainer}>
        <ul>
          <li>
              Términos y condiciones
          </li>
          <li>
              Ayuda
          </li>
        </ul>
        <ul>
          <li>
              Privacidad
          </li>
        </ul>
      </div>
      <div className={styles.rightFooterContainer}>
        <div className={styles.storeLinks}>
            <img src="/images/footerAndroid.svg" alt="Descargar App Android" />
            <img src="/images/footerApple.svg" alt="Descargar App Apple" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
