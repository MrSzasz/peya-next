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
        <h2>Cashback todos los días</h2>
        <p>Dentro y fuera de la app</p>
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
            number={7}
            img={"/icons/cashback/peya1.svg"}
            textTop={"en compras en"}
            textBottom={"El Súper digital de PedidosYa"}
            position={"firstCashbackCard"}
          />
        </motion.div>
        <motion.div
          className={styles.cardContainerForAnimation}
          variants={item}
        >
          <CashbackCard
            number={3}
            img={"/icons/cashback/peya2.svg"}
            altImg={"PedidosYa Logo"}
            textTop={"en la app de"}
            textBottom={"En Restaurantes, Mercados, Farmacias y mucho más!"}
            position={"secondCashbackCard"}
          />
        </motion.div>
        <motion.div
          className={styles.cardContainerForAnimation}
          variants={item}
        >
          <CashbackCard
            number={1}
            textTop={"fuera de la app"}
            textBottom={"En supermercados, tiendas de alimentos y bebidas"}
            position={"thirdCashbackCard"}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Cashback;
