import ItemBenefit from "../ItemBenefit/ItemBenefit";
import MainButton from "../MainButton/MainButton";
import styles from "./Benefits.module.scss";
import { motion } from "framer-motion";
import Image from "next/image";

const Benefits = ({ fn }) => {
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
            imgAlt={"Icono sin burocracia"}
          />
          <ItemBenefit
            text={"Visa Internacional"}
            img={"/icons/benefits/icon2.svg"}
            imgAlt={"Icono internacional"}
          />
          <ItemBenefit
            text={"Con beneficios y descuentos"}
            img={"/icons/benefits/icon3.svg"}
            imgAlt={"Icono descuentos"}
          />
        </div>
        <MainButton fn={fn} color="buttonBlue" />
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
        <Image
          src="/images/benefitsImg.png"
          alt="Mujer con tarjeta virtual"
          height={0}
          width={0}
          quality={100}
          sizes="100vw"
          className="w-full h-auto"
        />
      </motion.div>
    </section>
  );
};

export default Benefits;
