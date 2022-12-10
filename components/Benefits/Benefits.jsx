import ItemBenefit from "../ItemBenefit/ItemBenefit";
import MainButton from "../MainButton/MainButton";
import styles from "./Benefits.module.scss";
import { motion } from "framer-motion";

const Benefits = () => {
  return (
    <section id="benefitsSection" className={styles.benefitsContainer}>
      <motion.div
        key={1}
        className={styles.rightBenefits}
        initial={{
          transform: "translateX(-100%)",
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
        <h2>La tarjeta hecha a tu manera</h2>
        <div className={styles.benefitsList}>
          <ItemBenefit
            text={"Sin burocracia y 100% digital"}
            img={"/icons/benefits/icon1.svg"}
            alt={"Icono sin burocracia"}
          />
          <ItemBenefit
            text={"Visa Internacional"}
            img={"/icons/benefits/icon2.svg"}
            alt={"Icono internacional"}
          />
          <ItemBenefit
            text={"Con beneficios y descuentos"}
            img={"/icons/benefits/icon3.svg"}
            alt={"Icono descuentos"}
          />
        </div>
        <MainButton color="buttonBlue" />
      </motion.div>
      <motion.div
        key={2}
        className={styles.rightBenefits}
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
        <img src="/images/benefitsImg.png" alt="Mujer con tarjeta virtual" />
      </motion.div>
    </section>
  );
};

export default Benefits;
