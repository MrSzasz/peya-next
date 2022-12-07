import CashbackCard from "../CashbackCard/CashbackCard";
import styles from "./Cashback.module.scss";

const Cashback = () => {
  return (
    <section id="main" className={styles.cashbackContainer}>
      <div className={styles.cashbackTopText}>
        <h2>Cashback todos los días</h2>
        <p>Dentro y fuera de la app</p>
      </div>
      <div className={styles.cashbackCardsMainContainer}>
        <CashbackCard
          number={7}
          img={"/images/peyaMarketLogo.png"}
          textTop={"en compras en"}
          textBottom={"El Súper digital de PedidosYa"}
        />
        <CashbackCard
          number={3}
          img={"/images/peyaLogo.png"}
          altImg={"PedidosYa Logo"}
          textTop={"en la app de"}
          textBottom={"En Restaurantes, Mercados, Farmacias, y mucho más!"}
        />
        <CashbackCard
          number={1}
          textTop={"fuera de la app"}
          textBottom={"En supermercados, tiendas de alimentos y bebidas"}
        />
      </div>
    </section>
  );
};

export default Cashback;
