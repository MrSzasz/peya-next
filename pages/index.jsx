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
import {
  collection,
  getDocs,
  getFirestore,
  orderBy,
  query,
} from "firebase/firestore";
import { useEffect } from "react";

const Home = ({ heroDataFromDB, promoDataFromDB }) => {
  useEffect(() => {
    !localStorage.getItem("userData") &
      localStorage.setItem("userData", "null");
  }, []);

  return (
    <Layout>
      <main className={styles.mainContainer}>
        <Hero imagesArray={heroDataFromDB} />
        <Cashback />
        <Benefits />
        <Membership />
        <SecureCard />
        <PromoCarousel imagesArray={promoDataFromDB} />
        <Steps />
        <Prices />
      </main>
    </Layout>
  );
};

export const getServerSideProps = async () => {
  try {
    const db = getFirestore();

    const queryCollectionHero = await query(
      collection(db, "hero"),
      orderBy("sort")
    );

    const heroDataFromDB = [];

    await getDocs(queryCollectionHero).then((res) =>
      res.docs.map((item) =>
        heroDataFromDB.push({ ...item.data(), id: item.id })
      )
    );

    const queryCollectionPromos = await query(
      collection(db, "promos"),
      orderBy("sort")
    );

    const promoDataFromDB = [];

    await getDocs(queryCollectionPromos).then((res) =>
      res.docs.map((item) =>
        promoDataFromDB.push({ ...item.data(), id: item.id })
      )
    );

    return {
      props: {
        heroDataFromDB,
        promoDataFromDB,
      },
    };
  } catch (err) {
    console.log(err);
  }
};

export default Home;
