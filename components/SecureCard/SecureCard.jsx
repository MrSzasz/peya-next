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
          <img
            className={styles.secureCardImg}
            src="/demo/securecard/securecard.png"
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
            <h2>Sección 4</h2>
            <div className={styles.secureCardBenefitsContainer}>
              <ItemBenefit
                text={"Lorem ipsum dolor sit amet consectetur adipisicing elit"}
                img={"/icons/secureCard/icon1.svg"}
                alt={"Icono seguridad"}
              />
              <ItemBenefit
                text={"Lorem ipsum dolor sit amet consectetur adipisicing"}
                img={"/icons/secureCard/icon2.svg"}
                alt={"Icono sin datos"}
              />
              <ItemBenefit
                text={
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus"
                }
                img={"/icons/secureCard/icon3.svg"}
                alt={"Icono contactless"}
              />
              <ItemBenefit
                text={"Lorem ipsum dolor sit amet consectetur"}
                img={"/icons/secureCard/icon4.svg"}
                alt={"Icono precios bajos"}
              />
              <a
                href="https://lugo-tomas-portfolio.netlify.app/"
                className={styles.moreInfoLink}
              >
                Portfolio :)
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
            Sección 4
          </motion.h2>
          <img
            className={styles.secureCardImg}
            src="/demo/securecard/securecard.png"
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
              text={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, expedita"
              }
              img={"/icons/secureCard/icon1.svg"}
              alt={"Icono seguridad"}
            />
            <ItemBenefit
              text={"Lorem ipsum dolor sit amet consectetur adipisicing elit"}
              img={"/icons/secureCard/icon2.svg"}
              alt={"Icono sin datos"}
            />
            <ItemBenefit
              text={"Lorem ipsum dolor sit amet consectetur"}
              img={"/icons/secureCard/icon3.svg"}
              alt={"Icono contactless"}
            />
            <ItemBenefit
              text={"Lorem ipsum dolor sit amet"}
              img={"/icons/secureCard/icon4.svg"}
              alt={"Icono precios bajos"}
            />
            <a
              href="https://lugo-tomas-portfolio.netlify.app/"
              className={styles.moreInfoLink}
            >
              Portfolio :)
            </a>
          </motion.div>
        </>
      )}
    </section>
  );
};

export default SecureCard;
