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
import SliderComponent from "../components/SliderComponent/SliderComponent";
import { SwiperSlide } from "swiper/react";
import SkeletonLoader from "../components/SkeletonLoader/SkeletonLoader";

const Home = () => {
  const [heroDataFromDB, setHeroDataFromDB] = useState([]);
  const [promoDataFromDB, setPromoDataFromDB] = useState([]);
  const [loading, setLoading] = useState(true);

  const getProductsFromFirebase = async (location) => {
    const db = getFirestore();

    const queryCollection = collection(db, location);

    if (location === "hero") {
      await getDocs(queryCollection).then((res) =>
        setHeroDataFromDB(
          res.docs.map((item) => ({ ...item.data(), id: item.id }))
        )
      );
    } else {
      await getDocs(queryCollection).then((res) =>
        setPromoDataFromDB(
          res.docs.map((item) => ({ ...item.data(), id: item.id }))
        )
      );
    }

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  useEffect(() => {
    localStorage.getItem("userData")
      ? console.log(localStorage.getItem("userData"))
      : localStorage.setItem("userData", "null");
    getProductsFromFirebase("hero");
    getProductsFromFirebase("promos");
  }, []);

  return (
    <Layout>
      <main className={styles.mainContainer}>
        <Hero loading={loading} imagesArray={heroDataFromDB} />
        <Cashback />
        <Benefits />
        <Membership />
        <SecureCard />
        <PromoCarousel loading={loading} imagesArray={promoDataFromDB} />
        <Steps />
        <Prices />
      </main>
    </Layout>
  );
};

export default Home;
