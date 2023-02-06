import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a href="#hero">
        <Image
          src="/images/peyaPagosLogo.svg"
          alt="Logo PedidosYa Pagos"
          height={0}
          width={0}
          sizes="100vw"
          className="w-44 h-auto"
        />
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
            href={
              "https://play.google.com/store/apps/details?id=com.pedidosya&hl=es&referrer=pycat=retention&utm_medium=landing&utm_source=peya&utm_campaign=issuing&utm_content=download"
            }
          >
            <Image
              src="/images/footerAndroid.svg"
              alt="Descargar App Android"
              height={0}
              width={0}
              sizes="100vw"
              className="w-40 h-auto"
            />
          </Link>
          <Link
            href={
              "https://itunes.apple.com/app/pedidosya/id490099807?utm_medium=landing&utm_source=peya&utm_campaign=issuing&utm_content=download"
            }
          >
            <Image
              src="/images/footerApple.svg"
              alt="Descargar App Apple"
              height={0}
              width={0}
              sizes="100vw"
              className="w-40 h-auto"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
