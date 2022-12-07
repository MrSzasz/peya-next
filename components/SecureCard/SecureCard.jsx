import ItemBenefit from "../ItemBenefit/ItemBenefit";
import styles from "./SecureCard.module.scss";

const SecureCard = () => {
  return (
    <section className={styles.secureCardContainer}>
      <img src="/images/secureCardImg.png" alt="Tarjeta física" />
      <h2>La tarjeta más segura</h2>
      <div className={styles.benefitsList}>
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
      </div>
    </section>
  );
};

export default SecureCard;
