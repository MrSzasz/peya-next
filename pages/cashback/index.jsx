import Layout from "../../components/Layout/Layout";
import styles from "./cashback.module.scss";
import Membership from "../../components/Membership/Membership";
import ItemBenefit from "../../components/ItemBenefit/ItemBenefit";
import CashbackLongCard from "../../components/CashbackLongCard/CashbackLongCard";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
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
    <Layout
      fn={openModal}
      links={[
        // { href: "/beneficios", page: "Beneficios" },
        { href: "/cashback", page: "Cashback", current: true },
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
        {/* <PageTag page="Cashback" /> */}
        <section className={styles.cashbackPageSection}>
          <div>
            <div className={styles.topInfoCashback}>
              <h2>Cashback todos los días</h2>
              <p>
                Te regresamos dinero por tus compras realizadas dentro y fuera
                de la app
              </p>
            </div>
            <div className={styles.longCardContainer}>
              <CashbackLongCard
                bgColor={"#00F9BF"}
                number={7}
                imgAlt={"PedidosYa Market Logo"}
                text={
                  "Todas las compras que realices en esta sección, sumarán cashback en tu billetera de PedidosYa. Podrás recibir hasta $10.00 mensuales y usarlos para cualquier compra dentro de la app."
                }
                title={"El Súper digital de PedidosYa"}
                where={"dentro de la app en"}
                imgUrl={"/icons/cashback/peya1.svg"}
                textColor={"#004ADD"}
                blueSpan
                buttonColor={"buttonBlue"}
                mainImgUrl={"/images/benefits/benefits1.webp"}
                fn={openModal}
              />
              <CashbackLongCard
                bgColor={"#FA0050"}
                number={3}
                imgAlt={"PedidosYa Logo"}
                text={
                  "Todas las compras que realices en la app te darán cashback en tu billetera y se calculará sobre el total de la orden. No aplica a PedidosYa Market."
                }
                title={"En Restaurantes, Mercados, Farmacias, y mucho más!"}
                where={"dentro de la app en"}
                imgUrl={"/icons/cashback/peya2.svg"}
                textColor={"#FFF"}
                inverted={"row-reverse"}
                mainImgUrl={"/images/benefits/logos.gif"}
                bgSizeSpecial="75%"
                fn={openModal}
              />
              <CashbackLongCard
                bgColor={"#004ADD"}
                number={1}
                text={
                  "Todas las compras que realices en tiendas departamentales de estas categorías te darán automáticamente un reintegro a tu billetera de PedidosYa. "
                }
                title={"En Restaurantes, Mercados, Farmacias y mucho más!"}
                where={"fuera de la app"}
                // imgUrl={"/icons/cashback/peya1.svg"}
                // buttonColor={"buttonWhite"}
                textColor={"#FFF"}
                mainImgUrl={"/images/benefits/benefits3.webp"}
                fn={openModal}
              />
            </div>
            <div
              // id="secureCardSection"
              className={styles.secureCardContainer}
            >
              {windowWidth > 500 ? (
                <>
                  <motion.img
                    className={styles.secureCardImg}
                    src="/images/benefits/cashbackPhone.webp"
                    alt="Tarjeta física"
                    initial={{
                    
                      opacity: 0,
                    }}
                    whileInView={{
                      
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
                    <h4>
                      Verás acreditados los cashback en tu billetera de
                      PedidosYa Pagos
                    </h4>
                    <div className={styles.secureCardBenefitsContainer}>
                      <ItemBenefit
                        text={"Se acumulan"}
                        img={"/icons/cashback/icon1.svg"}
                        imgAlt={"Icono seguridad"}
                      />
                      <ItemBenefit
                        text={"No vencen"}
                        img={"/icons/cashback/icon2.svg"}
                        imgAlt={"Icono sin datos"}
                      />
                      <ItemBenefit
                        text={"Úsalos dentro de la app"}
                        img={"/icons/cashback/icon3.svg"}
                        imgAlt={"Icono contactless"}
                      />
                      <ItemBenefit
                        text={"Recibe hasta $10 de cashback por mes"}
                        img={"/icons/cashback/icon4.svg"}
                        imgAlt={"Icono precios bajos"}
                      />
                    </div>
                  </motion.div>
                </>
              ) : (
                <>
                  <motion.h4
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
                    Verás acreditados los cashback en tu billetera de PedidosYa
                    Pagos
                  </motion.h4>
                  <motion.img
                    className={styles.secureCardImg}
                    src="/images/benefits/cashbackPhone.webp"
                    alt="Tarjeta física"
                    initial={{
                      
                      opacity: 0,
                    }}
                    whileInView={{
                      
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
                      text={"Se acumulan"}
                      img={"/icons/cashback/icon1.svg"}
                      imgAlt={"Icono seguridad"}
                    />
                    <ItemBenefit
                      text={"No vencen"}
                      img={"/icons/cashback/icon2.svg"}
                      imgAlt={"Icono sin datos"}
                    />
                    <ItemBenefit
                      text={"Úsalos dentro de la app"}
                      img={"/icons/cashback/icon3.svg"}
                      imgAlt={"Icono contactless"}
                    />
                    <ItemBenefit
                      text={"Recibe hasta $10 de cashback por mes"}
                      img={"/icons/cashback/icon4.svg"}
                      imgAlt={"Icono precios bajos"}
                    />
                  </motion.div>
                </>
              )}
            </div>
          </div>
        </section>
        <Membership fn={openModal} />
      </main>
      <AnimatePresence>
        {showPopUp ? <PopUp fn={openModal} /> : null}
      </AnimatePresence>
    </Layout>
  );
};

export default index;
