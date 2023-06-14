import Layout from "../../components/Layout/Layout";
import styles from "./help.module.scss";
import ItemBenefit from "../../components/ItemBenefit/ItemBenefit";
import TutorialVideo from "../../components/TutorialVideo/TutorialVideo";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import FAQAccordion from "../../components/FAQAccordion/FAQAccordion";
import PopUp from "../../components/PopUp/PopUp";

const index = () => {
  const [windowWidth, setWindowWidth] = useState(null);
  const [showPopUp, setShowPopUp] = useState(false);

  const openModal = () => {
    setShowPopUp((current) => !current);
  };
  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);
  return (
    <>
      <Layout
        fn={openModal}
        links={[
          // { href: "/beneficios", page: "Beneficios" },
          { href: "/cashback", page: "Cashback" },
        ]}
        footerLinks={[
          {
            href: "/#pricesSection",
            title: "Tasas y Tarifas",
            target: "_self",
          },
          {
            href: "#faq",
            title: "Preguntas Frecuentes",
            target: "_self",
          },
          {
            href: "#",
            title: "Centro de Ayuda",
            target: "_self",
          },
        ]}
      >
        <main>
          <section className={styles.helpPageContainer}>
            <div
              // id="secureCardSection"
              className={styles.secureCardContainer}
            >
              {windowWidth > 500 ? (
                <>
                  <motion.img
                    className={styles.secureCardImg}
                    src="/images/help/phoneHelp.png"
                    alt="Tarjeta física"
                    initial={{
                      transform: "translateX(+100%)",
                      opacity: 0,
                    }}
                    whileInView={{
                      transform: "translateX(0%)",
                      opacity: 1,
                      transition: {
                        duration: 1,
                        type: "tween",
                        damping: 25,
                        stiffness: 500,
                      },
                    }}
                    viewport={{ once: true }}
                    exit={{
                      transform: "translateX(0%)",
                      opacity: 1,
                    }}
                  />
                  <motion.div
                    key={3}
                    initial={{
                      transform: "translateX(+100%)",
                      opacity: 0,
                    }}
                    whileInView={{
                      transform: "translateX(0%)",
                      opacity: 1,
                      transition: {
                        duration: 1,
                        type: "tween",
                        damping: 25,
                        stiffness: 500,
                      },
                    }}
                    viewport={{ once: true }}
                    exit={{
                      transform: "translateX(0%)",
                      opacity: 1,
                    }}
                    className={styles.secureCardTextDesktop}
                  >
                    <h2>Conoce todos los requisitos necesarios</h2>
                    <div className={styles.secureCardBenefitsContainer}>
                      <ItemBenefit
                        text={"Panameños y extranjeros con cédula panameña"}
                        img={"/icons/help/icon1.svg"}
                        imgAlt={"Icono seguridad"}
                      />
                      <ItemBenefit
                        text={"Ingreso mensual mínimo de $600"}
                        img={"/icons/help/icon2.svg"}
                        imgAlt={"Icono sin datos"}
                      />
                      <ItemBenefit
                        text={"Mínimo 6 meses de permanencia en el empleo"}
                        img={"/icons/help/icon3.svg"}
                        imgAlt={"Icono contactless"}
                      />
                      <ItemBenefit
                        text={"Buenas referencias de crédito"}
                        img={"/icons/help/icon4.svg"}
                        imgAlt={"Icono precios bajos"}
                      />
                    </div>
                  </motion.div>
                </>
              ) : (
                <>
                  <motion.h2
                    key={3}
                    initial={{
                      transform: "translateX(+100%)",
                      opacity: 0,
                    }}
                    whileInView={{
                      transform: "translateX(0%)",
                      opacity: 1,
                      transition: {
                        duration: 1,
                        type: "tween",
                        damping: 25,
                        stiffness: 500,
                      },
                    }}
                    viewport={{ once: true }}
                    exit={{
                      transform: "translateX(0%)",
                      opacity: 1,
                    }}
                  >
                    Conoce todos los requisitos necesarios
                  </motion.h2>
                  <motion.img
                    className={styles.secureCardImg}
                    src="/images/help/phoneHelp.png"
                    alt="Tarjeta física"
                    initial={{
                      transform: "translateX(+100%)",
                      opacity: 0,
                    }}
                    whileInView={{
                      transform: "translateX(0%)",
                      opacity: 1,
                      transition: {
                        duration: 1,
                        type: "tween",
                        damping: 25,
                        stiffness: 500,
                      },
                    }}
                    viewport={{ once: true }}
                    exit={{
                      transform: "translateX(0%)",
                      opacity: 1,
                    }}
                  />
                  <motion.div
                    className={styles.benefitsList}
                    key={4}
                    initial={{
                      transform: "translateX(+100%)",
                      opacity: 0,
                    }}
                    whileInView={{
                      transform: "translateX(0%)",
                      opacity: 1,
                      transition: {
                        duration: 1,
                        type: "tween",
                        damping: 25,
                        stiffness: 500,
                      },
                    }}
                    viewport={{ once: true }}
                    exit={{
                      transform: "translateX(0%)",
                      opacity: 1,
                    }}
                  >
                    <ItemBenefit
                      text={"Panameños y extranjeros con cédula panameña"}
                      img={"/icons/help/icon1.svg"}
                      imgAlt={"Icono seguridad"}
                    />
                    <ItemBenefit
                      text={"Ingreso mensual mínimo de $600"}
                      img={"/icons/help/icon2.svg"}
                      imgAlt={"Icono sin datos"}
                    />
                    <ItemBenefit
                      text={"Mínimo 6 meses de permanencia en el empleo"}
                      img={"/icons/help/icon3.svg"}
                      imgAlt={"Icono contactless"}
                    />
                    <ItemBenefit
                      text={"Buenas referencias de crédito"}
                      img={"/icons/help/icon4.svg"}
                      imgAlt={"Icono precios bajos"}
                    />
                  </motion.div>
                </>
              )}
            </div>

            {/* <div className={styles.helpVideoSectionContainer}>
              <h3>Videos de ayuda</h3>
              <div className={styles.helpVideoContainer}>
                <div className={styles.helpVideo}>
                  <div className={styles.videoResponsive}>
                    <div className={styles.iframeContainer}>
                      <iframe
                        width="853"
                        height="480"
                        src={"https://www.youtube.com/embed/AyOOFLsE9wI"}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="Embedded youtube"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.helpVideo}>
                  <div className={styles.videoResponsive}>
                    <div className={styles.iframeContainer}>
                      <iframe
                        width="853"
                        height="480"
                        src={"https://www.youtube.com/embed/AyOOFLsE9wI"}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="Embedded youtube"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div> */}

            <FAQAccordion />
          </section>
        </main>
      </Layout>
      <AnimatePresence>
        {showPopUp ? <PopUp fn={openModal} /> : null}
      </AnimatePresence>
    </>
  );
};

export default index;
