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

import { collection, getDocs, getFirestore } from "firebase/firestore"; // Importamos lo necesario
import { useEffect, useState } from "react";

const Home = () => {
  const [promoDataFromDB, setPromoDataFromDB] = useState([]);

  const getProductsFromFirebase = async () => {
    const db = getFirestore();

    const queryCollection = collection(db, "promos");

    await getDocs(queryCollection).then((res) =>
      setPromoDataFromDB(res.docs.map((item) => ({ ...item.data(), id: item.id })))
    );
  };

  useEffect(() => {
    getProductsFromFirebase();
  }, []);

  return (
    <Layout>
      <main className={styles.mainContainer}>
        <Hero />
        <Cashback />
        <Benefits />
        <Membership />
        <SecureCard />
        <PromoCarousel imagesArray={promoDataFromDB}/>
        <Steps />
        <Prices />
      </main>
    </Layout>
  );
};

export default Home;
