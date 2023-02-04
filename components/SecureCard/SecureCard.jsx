import ItemBenefit from "../ItemBenefit/ItemBenefit";
import styles from "./SecureCard.module.scss";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const SecureCard = () => {
  const [windowWidth, setWindowWidth] = useState(null);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  return (
    <section id="secureCardSection" className={styles.secureCardContainer}>
      {windowWidth > 500 ? (
        <>
          {" "}
          <img
            className={styles.secureCardImg}
            src="/images/secureCardImg.png"
            alt="Tarjeta física"
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
            <h2>La tarjeta más segura</h2>
            <div className={styles.secureCardBenefitsContainer}>
              <ItemBenefit
                text={"Con la seguridad de Visa y el respaldo de Banesco"}
                img={"/icons/secureCard/icon1.svg"}
                imgAlt={"Icono seguridad"}
              />
              <ItemBenefit
                text={"Sin datos impresos, solo tú puedes verlos desde la app"}
                img={"/icons/secureCard/icon2.svg"}
                imgAlt={"Icono sin datos"}
              />
              <ItemBenefit
                text={"Con tecnología contactless, paga sin contacto físico"}
                img={"/icons/secureCard/icon3.svg"}
                imgAlt={"Icono contactless"}
              />
              <ItemBenefit
                text={"Protección de precio, paga siempre el precio más bajo"}
                img={"/icons/secureCard/icon4.svg"}
                imgAlt={"Icono precios bajos"}
              />
              <a
                href="https://www.visa.com.pa/content/VISA/lac/spanishlanguagemaster/es_UY/home/pague-con-visa/tarjetas/beneficios/proteccion-de-precio.html"
                className={styles.moreInfoLink}
              >
                Más información
              </a>
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
            La tarjeta más segura
          </motion.h2>
          <img
            className={styles.secureCardImg}
            src="/images/secureCardImg.png"
            alt="Tarjeta física"
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
              text={"Con la seguridad de Visa y el respaldo de Banesco"}
              img={"/icons/secureCard/icon1.svg"}
              imgAlt={"Icono seguridad"}
            />
            <ItemBenefit
              text={"Sin datos impresos, solo tú puedes verlos desde la app"}
              img={"/icons/secureCard/icon2.svg"}
              imgAlt={"Icono sin datos"}
            />
            <ItemBenefit
              text={"Con tecnología contactless, paga sin contacto físico"}
              img={"/icons/secureCard/icon3.svg"}
              imgAlt={"Icono contactless"}
            />
            <ItemBenefit
              text={"Protección de precio, paga siempre el precio más bajo"}
              img={"/icons/secureCard/icon4.svg"}
              imgAlt={"Icono precios bajos"}
            />
            <a
              href="https://www.visa.com.pa/content/VISA/lac/spanishlanguagemaster/es_UY/home/pague-con-visa/tarjetas/beneficios/proteccion-de-precio.html"
              className={styles.moreInfoLink}
            >
              Más información
            </a>
          </motion.div>
        </>
      )}
    </section>
  );
};

export default SecureCard;
