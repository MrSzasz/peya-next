import CashbackCard from "../CashbackCard/CashbackCard";
import styles from "./Cashback.module.scss";

const Cashback = () => {
  return (
    <section className={styles.cashbackContainer}>
      <div className={styles.cashbackTopText}>
        <h2>Cashback todos los días</h2>
        <p>Dentro y fuera de la app</p>
      </div>
      <div className={styles.cashbackCardsMainContainer}>
        <CashbackCard
          number={7}
          // img={}
          altImg={"PedidosYa Market Logo"}
          textTop={"dentro de la app en"}
          textBottom={"El Súper digital de PedidosYa"}
        />
        <CashbackCard
          number={3}
          // img={}
          altImg={"PedidosYa Logo"}
          textTop={"dentro de la app de"}
          textBottom={"En Restaurantes, Mercados, Farmacias, y mucho más!"}
        />
        <CashbackCard
          number={1}
          textBottom={"En supermercados, tiendas de alimentos y bebidas"}
        />
      </div>
    </section>
  );
};

export default Cashback;
