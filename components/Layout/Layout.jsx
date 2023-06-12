import Head from "next/head";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import dynamic from "next/dynamic";
import { useEffect } from "react";
const DynamicGoToTop = dynamic(() => import("../GoToTop/GoToTop"), {
  ssr: false,
});

const Layout = ({
  children,
  title = "PedidosYa Pagos - Pide Ya tu Visa Crédito | PedidosYa",
  desc = "Accede a Cashback todos los días, dentro y fuera de la app",
  fn,
  links,
  footerLinks
}) => {
  useEffect(() => {
    let height = document.getElementById("nav").offsetHeight;
    document.documentElement.style.setProperty("--top-navbar", height + "px");
  }, []);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={desc} />
        <meta
          name="keywords"
          content="Pagos, PedidosYa Pagos, PedidosYa, Visa, Visa Crédito, Crédito, pedidosya, pedidos, rápido, compra, tarjeta, visa, crédito, beneficios, compras, descuentos, cashback, pedidos, digital, app, precio, precios, financiamiento, supermercados, restaurantes"
        />
        <link rel="icon" href="/icon.ico" />
      </Head>
      <Header fn={fn} links={links} />
      {children}
      <DynamicGoToTop />
      <Footer footerLinks={footerLinks} />
    </>
  );
};

export default Layout;
