import Link from "next/link";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a href="#hero">
        <img src="/images/peyaPagosLogo.svg" alt="Logo PedidosYa Pagos" />
      </a>
      <p className={styles.disclaimer}>Pedidos Ya © 2010 - 2022</p>
      <div className={styles.centerFooterContainer}>
        <ul>
          <li>
            <a href="https://terms.pystatic.com/about/wallet/creditcard/credit-offer/tyc_credit-offer_es-pa.html">
              Términos y condiciones
            </a>
          </li>
          <li>
            <a href="https://www.pedidosya.com.pa/about/tyc_wallet">
              Términos cashback
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="https://www.pedidosya.com.pa/about/privacy_policies">
              Privacidad
            </a>
          </li>
          <li>
            <a href="pedidosya://onlinehelp">Preguntas frecuentes</a>
          </li>
        </ul>
      </div>
      <div className={styles.rightFooterContainer}>
        <div className={styles.storeLinks}>
          <Link
            href={
              "https://play.google.com/store/apps/details?id=com.pedidosya&hl=es&referrer=pycat=retention&utm_medium=landing&utm_source=peya&utm_campaign=issuing&utm_content=download"
            }
          >
            <img src="/images/footerAndroid.svg" alt="Descargar App Android" />
          </Link>
          <Link
            href={
              "https://itunes.apple.com/app/pedidosya/id490099807?utm_medium=landing&utm_source=peya&utm_campaign=issuing&utm_content=download"
            }
          >
            <img src="/images/footerApple.svg" alt="Descargar App Apple" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
