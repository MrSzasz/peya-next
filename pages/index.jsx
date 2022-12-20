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
  doc,
  getDoc,
} from "firebase/firestore"; // Importamos lo necesario
import { useEffect, useState } from "react";

const Home = () => {
  const [heroDataFromDB, setHeroDataFromDB] = useState([]);
  const [promoDataFromDB, setPromoDataFromDB] = useState([]);
  const [linksFromFirebase, setLinksFromFirebase] = useState({});
  const [loading, setLoading] = useState(true);

  const getProductsFromFirebase = async (location) => {
    const db = getFirestore();

    const queryCollection = collection(db, location);

    if (location === "hero") {
      await getDocs(queryCollection).then((res) => {
        setHeroDataFromDB(
          res.docs.map((item) => ({ ...item.data(), id: item.id }))
        );
      });
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
  const getLinksFromFirebase = async () => {
    const db = getFirestore();

    const dbQuery = doc(db, "hero", "links");

    getDoc(dbQuery)
      .then((res) => {
        setLinksFromFirebase({ ...res.data(), id: res.id });
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    localStorage.getItem("userData")
      ? console.log("data loaded")
      : localStorage.setItem("userData", "null");
    getProductsFromFirebase("hero");
    getProductsFromFirebase("promos");
    getLinksFromFirebase();
  }, []);

  return (
    <Layout
      pedirYa={linksFromFirebase.pedirYa}
      androidLink={linksFromFirebase.android}
      appleLink={linksFromFirebase.apple}
    >
      <main className={styles.mainContainer}>
        <Hero loading={loading} imagesArray={heroDataFromDB} />
        <Cashback />
        <Benefits pedirYa={linksFromFirebase.pedirYa} />
        <Membership pedirYa={linksFromFirebase.pedirYa} />
        <SecureCard />
        <PromoCarousel loading={loading} imagesArray={promoDataFromDB} />
        <Steps
          androidLink={linksFromFirebase.android}
          appleLink={linksFromFirebase.apple}
        />
        <Prices />
      </main>
    </Layout>
  );
};

export default Home;
