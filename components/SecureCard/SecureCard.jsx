import ItemBenefit from "../ItemBenefit/ItemBenefit";
import styles from "./SecureCard.module.scss";
import { motion } from "framer-motion";

const SecureCard = () => {
  return (
    <section id="secureCardSection" className={styles.secureCardContainer}>
      <img
        className={styles.secureCardImg}
        src="/images/secureCardImg.png"
        alt="Tarjeta física"
      />
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
          alt={"Icono seguridad"}
        />
        <ItemBenefit
          text={"Sin datos impresos, solo tú puedes verlos desde la app"}
          img={"/icons/secureCard/icon2.svg"}
          alt={"Icono sin datos"}
        />
        <ItemBenefit
          text={"Con tecnología contactless, paga sin contacto físico"}
          img={"/icons/secureCard/icon3.svg"}
          alt={"Icono contactless"}
        />
        <ItemBenefit
          text={"Protección de precio, paga siempre el precio más bajo"}
          img={"/icons/secureCard/icon4.svg"}
          alt={"Icono precios bajos"}
        />
      </motion.div>
    </section>
  );
};

export default SecureCard;
