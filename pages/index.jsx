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
import { useEffect, useState } from "react";
import PopUp from "../components/PopUp/PopUp";

const Home = ({ heroDataFromDB, promoDataFromDB }) => {
  const [showPopUp, setShowPopUp] = useState(false);

  const openModal = () => {
    setShowPopUp((current) => !current);
  };

  useEffect(() => {
    !localStorage.getItem("userData") &
      localStorage.setItem("userData", "null");
  }, []);

  return (
    <Layout fn={openModal}>
      <main className={styles.mainContainer}>
        <Hero imagesArray={heroDataFromDB} fn={openModal} />
        <Cashback />
        <Benefits fn={openModal} />
        <Membership fn={openModal} />
        <SecureCard />
        <PromoCarousel imagesArray={promoDataFromDB} />
        <Steps />
        <Prices />
      </main>
      {showPopUp ? <PopUp fn={openModal} isOpen={showPopUp} /> : null}
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
