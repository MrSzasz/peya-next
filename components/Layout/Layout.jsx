import Head from "next/head";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
const Layout = ({
  children,
  title = "NextJS project",
  desc = "First project with NextJS"
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={desc} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      {children}
      <Footer/>
    </>
  );
};

export default Layout;
