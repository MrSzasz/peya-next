import Head from "next/head";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Hidden from "../Hidden/Hidden";

import dynamic from "next/dynamic";
const DynamicGoToTop = dynamic(() => import("../GoToTop/GoToTop"), {
  ssr: false,
});

const Layout = ({
  children,
  title = "NextJS project",
  desc = "First project with NextJS",
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={desc} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hidden />
      
      <Header />
      {children}
      <DynamicGoToTop />
      <Footer />
    </>
  );
};

export default Layout;
