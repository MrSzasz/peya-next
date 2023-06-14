import Layout from "../../components/Layout/Layout";
import BenefitsFilter from "../../components/BenefitsFilter/BenefitsFilter";
import BenefitCard from "../../components/BenefitCard/BenefitCard";
import PopUp from "../../components/PopUp/PopUp";
import styles from "./benefits.module.scss";
import Image from "next/image";
import PageHero from "../../components/PageHero/PageHero";
import { collection, getDocs, getFirestore } from "firebase/firestore"; // Importamos lo necesario
import { useEffect, useState } from "react";
import BenefitsCardContainer from "../../components/BenefitsCardContainer/BenefitsCardContainer";
import BenefitsPopUp from "../../components/BenefitsPopUp/BenefitsPopUp";
import Membership from "../../components/Membership/Membership";
import { AnimatePresence } from "framer-motion";

const index = () => {
  const [dataFromDB, setDataFromDB] = useState([]);
  const [categoriesArray, setCategoriesArray] = useState([]);
  const [benefitsArray, setBenefitsArray] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("todo");
  const [filteredArray, setFilteredArray] = useState([]);
  const [selectedBenefitForInfo, setSelectedBenefitForInfo] = useState();
  const [openedModal, setOpenedModal] = useState(false);
  const [showPopUp, setShowPopUp] = useState(false);

  const openModal = () => {
    setShowPopUp((current) => !current);
  };

  const getProductsFromFirebase = async () => {
    const db = getFirestore();
    const queryCollection = collection(db, "benefits");
    await getDocs(queryCollection)
      .then((res) =>
        setDataFromDB(res.docs.map((item) => ({ ...item.data(), id: item.id })))
      )
      .finally(console.log("data fetched"));
  };

  const orderProducts = (mainArrayFromCollection) => {
    const benefitsArrayFromCollection = [];
    const categoriesArrayFromCollection = [];

    console.log("order", mainArrayFromCollection);

    if (mainArrayFromCollection.length !== 0) {
      mainArrayFromCollection.forEach((item) => {
        if (item.id === "benefitsCategories") {
          item.categories.forEach((category) => {
            categoriesArrayFromCollection.push(category);
          });
        } else {
          benefitsArrayFromCollection.push(item);
        }
      });

      setCategoriesArray(categoriesArrayFromCollection);
      setBenefitsArray(benefitsArrayFromCollection);
    }
  };

  const handleFilter = (categoryForFilter) => {
    setSelectedCategory(categoryForFilter);

    const newFilteredArray = benefitsArray.filter(
      (item) =>
        item.benefitCategory.toLowerCase() === categoryForFilter.toLowerCase()
    );

    setFilteredArray(newFilteredArray);
  };

  const handleOpenModal = () => {
    setOpenedModal((current) => !current);
  };

  const handleBenefitCardFunction = (benefit) => {
    setSelectedBenefitForInfo(benefit);
    handleOpenModal();
  };

  useEffect(() => {
    getProductsFromFirebase();
  }, []);

  useEffect(() => {
    orderProducts(dataFromDB);
  }, [dataFromDB]);

  return (
    <>
      <Layout
        fn={openModal}
        links={[
          // { href: "/beneficios", page: "Beneficios", current: true },
          { href: "/cashback", page: "Cashback" },
        ]}
        footerLinks={[
          {
            href: "/#pricesSection",
            title: "Tasas y Tarifas",
            target: "_self",
          },
          {
            href: "/ayuda#faq",
            title: "Preguntas Frecuentes",
            target: "_self",
          },
          {
            href: "/ayuda",
            title: "Centro de Ayuda",
            target: "_self",
          },
        ]}
      >
        <main>
          {/* <PageTag page="Beneficios" /> */}
          {/* <PageHero
            
          /> */}
          <img className={styles.benefitsImageHero} src="/images/promos/promocionesHero.webp" alt="" />
          <section className={styles.benefitsPageContainer}>
            <h2>Conocé todas nuestras promociones</h2>
            <BenefitsFilter
              category={categoriesArray}
              selectedCategory={selectedCategory}
              filterFunction={handleFilter}
            />

            {selectedCategory.toLowerCase() === "todo" ? (
              <BenefitsCardContainer
                benefitCardFn={handleBenefitCardFunction}
                benefitsArray={benefitsArray}
              />
            ) : (
              <BenefitsCardContainer
                benefitCardFn={handleBenefitCardFunction}
                benefitsArray={filteredArray}
              />
            )}
          </section>
          <Membership fn={openModal} />
        </main>
      </Layout>
      {openedModal && (
        <AnimatePresence>
          <BenefitsPopUp fn={handleOpenModal}>
            <div className={styles.benefitsPopUpContainer}>
              <div className={styles.topPopUpContent}>
                <div className={styles.topLeftPopUp}>
                  <h4>{selectedBenefitForInfo.benefitTitle}</h4>
                </div>
                <div className={styles.topRightPopUp}>
                  <Image
                    src={selectedBenefitForInfo.benefitImage}
                    alt={selectedBenefitForInfo.benefitTitle + " imagen."}
                    height={0}
                    width={0}
                    quality={80}
                    sizes="100vw"
                    className="w-full h-auto"
                  />
                </div>
              </div>
              <div className={styles.bottomPopUpContent}>
                <div>
                  <h5>Descripción</h5>
                  <p>{selectedBenefitForInfo.benefitDescription}</p>
                </div>
                <div>
                  <h5>Fecha de vigencia</h5>
                  <p>
                    Desde el dia{" "}
                    {selectedBenefitForInfo.benefitStartDate
                      .split("-")
                      .reverse()
                      .join("/")}{" "}
                    hasta el{" "}
                    {selectedBenefitForInfo.benefitEndDate
                      .split("-")
                      .reverse()
                      .join("/")}{" "}
                    inclusive.
                  </p>
                </div>
                <div>
                  <h5>Términos y condiciones</h5>
                  <p>{selectedBenefitForInfo.benefitTyC}</p>
                </div>
              </div>
            </div>
          </BenefitsPopUp>
        </AnimatePresence>
      )}
      <AnimatePresence>
        {showPopUp ? <PopUp fn={openModal} /> : null}
      </AnimatePresence>
    </>
  );
};

export default index;