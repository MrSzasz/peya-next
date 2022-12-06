import Layout from "../components/Layout/Layout";
import styles from "./index.module.scss";
import Cashback from "../components/Cashback/Cashback";
import Benefits from "../components/Benefits/Benefits";
import SecureCard from "../components/SecureCard/SecureCard";
import Membership from "../components/Membership/Membership";
import PromoCarousel from "../components/PromoCarousel/PromoCarousel";
import Steps from "../components/Steps/Steps";
import Prices from "../components/Prices/Prices";
import Hero from "../components/Hero/Hero";

const Home = () => {
  return (
    <Layout>
      <main className={styles.mainContainer}>
        <Hero />
        <Cashback />
        <Benefits />
        <Membership />
        <SecureCard />
        <PromoCarousel />
        <Steps />
        <Prices />
      </main>
    </Layout>
  );
};

export default Home;
