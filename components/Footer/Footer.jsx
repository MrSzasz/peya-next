import Link from "next/link";
import styles from "./Footer.module.scss";

const Footer = ({androidLink="#", appleLink="#"}) => {
  return (
    <footer className={styles.footer}>
      <a href="#hero">
        <img src="/images/peyaPagosLogo.svg" alt="Logo PedidosYa Pagos" />
      </a>
      <p className={styles.disclaimer}>Pedidos Ya © 2010 - 2022</p>
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
          <Link href={androidLink}>
            <img src="/images/footerAndroid.svg" alt="Descargar App Android" />
          </Link>
          <Link href={appleLink}>
            <img src="/images/footerApple.svg" alt="Descargar App Apple" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
