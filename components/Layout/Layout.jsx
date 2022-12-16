import Head from "next/head";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import dynamic from "next/dynamic";
const DynamicGoToTop = dynamic(() => import("../GoToTop/GoToTop"), {
  ssr: false,
});

const Layout = ({
  children,
  title = "PedidosYa Pagos - Pide Ya tu Visa Crédito | PedidosYa",
  desc = "PedidosYa Pagos",
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={desc} />
        <link rel="icon" href="/icon.ico" />
      </Head>
      <Header />
      {children}
      <DynamicGoToTop />
      <Footer />
    </>
  );
};

export default Layout;
