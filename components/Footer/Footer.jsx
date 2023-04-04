import Link from "next/link";
import { useAppContext } from "../../context/AppContext";
import styles from "./Footer.module.scss";

const Footer = () => {
  const { componentLoaded } = useAppContext();

  return (
    <footer className={styles.footer}>
      <a href="#hero">
        <img src="/images/peyaPagosLogo.svg" alt="Logo PedidosYa Pagos" />
      </a>
      <p className={styles.disclaimer}>Pedidos Ya © 2010 - 2022</p>
      <div className={styles.centerFooterContainer}>
        <ul>
          <li>
            <a target="_blank" href="/docs/tyc.html">
              Términos y condiciones
            </a>
          </li>
          <li>
            <Link href="https://www.pedidosya.com.pa/about/tyc_wallet">
              Términos cashback
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link href="https://www.pedidosya.com.pa/about/privacy_policies">
              Privacidad
            </Link>
          </li>
          {/* <li>
            <a href="pedidosya://onlinehelp">Preguntas frecuentes</a>
          </li> */}
        </ul>
      </div>
      <div className={styles.rightFooterContainer}>
        <div className={styles.storeLinks}>
          <Link
            onClick={() => {
              componentLoaded(
                "clickedButtons",
                "sectionName",
                "Footer",
                "cobranded_download.clicked",
                "android"
              );
            }}
            href={
              "https://play.google.com/store/apps/details?id=com.pedidosya&hl=es&referrer=pycat=retention&utm_medium=landing&utm_source=peya&utm_campaign=issuing&utm_content=download"
            }
            target="_blank"
          >
            <img src="/images/footerAndroid.svg" alt="Descargar App Android" />
          </Link>
          <Link
            onClick={() => {
              componentLoaded(
                "clickedButtons",
                "sectionName",
                "Footer",
                "cobranded_download.clicked",
                "android"
              );
            }}
            href={
              "https://itunes.apple.com/app/pedidosya/id490099807?utm_medium=landing&utm_source=peya&utm_campaign=issuing&utm_content=download"
            }
            target="_blank"
          >
            <img src="/images/footerApple.svg" alt="Descargar App Apple" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
