import ItemBenefit from "../ItemBenefit/ItemBenefit";
import MainButton from "../MainButton/MainButton";
import styles from "./Benefits.module.scss";
import { motion } from "framer-motion";
import Image from "next/image";

const Benefits = ({fn}) => {
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
        <h2>Sección 2</h2>
        <div className={styles.benefitsList}>
          <ItemBenefit
            text={"Lorem ipsum dolor sit amet"}
            img={"/icons/benefits/icon1.svg"}
            alt={"Icono sin burocracia"}
          />
          <ItemBenefit
            text={"Lorem ipsum"}
            img={"/icons/benefits/icon2.svg"}
            alt={"Icono internacional"}
          />
          <ItemBenefit
            text={"Lorem ipsum dolor"}
            img={"/icons/benefits/icon3.svg"}
            alt={"Icono descuentos"}
          />
        </div>
        <MainButton
          fn={fn}
          color="buttonBlue"
        />
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
        <div className={styles.benefitsImageContainer}>
          <Image src="/demo/benefits/benefits.jpg" fill={true} alt="Mujer con tarjeta virtual" style={{objectFit: "cover"}} />
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
