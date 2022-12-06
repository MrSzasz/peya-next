import GoToTop from "../GoToTop/GoToTop";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.leftFooterContainer}>
        <div className={styles.logo}></div>
        <p>Pedidos Ya © 2010 - 2022</p>
      </div>
      <div className={styles.centerFooterContainer}>
        <ul>
          <li>Términos y condiciones</li>
          <li>Tasas y tarifas</li>
          <li>Preguntas frecuentes</li>
          <li>Centro de ayuda</li>
        </ul>
      </div>
      <div className={styles.rightFooterContainer}>
        <div className={styles.storeLinks}>
          <div className={styles.logoStore}></div>
          <div className={styles.logoStore}></div>
        </div>
      </div>
      <GoToTop />
    </footer>
  );
};

export default Footer;
