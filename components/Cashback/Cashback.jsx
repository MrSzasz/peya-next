import CashbackCard from "../CashbackCard/CashbackCard";
import styles from "./Cashback.module.scss";
import { motion } from "framer-motion";

const Cashback = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <section id="cashbackSection" className={styles.cashbackContainer}>
      <div className={styles.cashbackTopText}>
        <h2>Sección 1</h2>
        <p>Lorem ipsum dolor, sit amet</p>
      </div>
      <motion.div
        className={styles.cashbackCardsMainContainer}
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.div
          className={styles.cardContainerForAnimation}
          variants={item}
        >
          <CashbackCard
            number={9}
            img={"/demo/logo.png"}
            textTop={"Lorem ipsum dolor"}
            textBottom={"Lorem ipsum dolor sit amet consectetur"}
            position={"firstCashbackCard"}
          />
        </motion.div>
        <motion.div
          className={styles.cardContainerForAnimation}
          variants={item}
        >
          <CashbackCard
            number={6}
            img={"/demo/logo.png"}
            altImg={"PedidosYa Logo"}
            textTop={"Lorem ipsum dolor"}
            textBottom={"Lorem ipsum dolor sit amet consectetur"}
            position={"secondCashbackCard"}
          />
        </motion.div>
        <motion.div
          className={styles.cardContainerForAnimation}
          variants={item}
        >
          <CashbackCard
            number={3}
            textTop={"Lorem ipsum dolor"}
            textBottom={"Lorem ipsum dolor sit amet consectetur"}
            position={"thirdCashbackCard"}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Cashback;
