import GoToTop from "../GoToTop/GoToTop";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      {/* <div className={styles.leftFooterContainer}> */}
      <img src="/images/peyaPagosLogo.png" alt="Logo PedidosYa Pagos" />
      <p className={styles.disclaimer}>Pedidos Ya © 2010 - 2022</p>
      {/* </div> */}
      <div className={styles.centerFooterContainer}>
        <ul>
          <li>Términos y condiciones</li>
          <li>Tasas y tarifas</li>
        </ul>
        <ul>
          <li>Preguntas frecuentes</li>
          <li>Centro de ayuda</li>
        </ul>
      </div>
      <div className={styles.rightFooterContainer}>
        <div className={styles.storeLinks}>
          <img src="/images/footerAndroid.png" alt="Descargar App Android" />
          <img src="/images/footerApple.png" alt="Descargar App Apple" />
        </div>
      </div>
      <GoToTop />
    </footer>
  );
};

export default Footer;
