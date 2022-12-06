import ItemBenefit from "../ItemBenefit/ItemBenefit";
import styles from "./SecureCard.module.scss";

const SecureCard = () => {
  return (
    <section className={styles.secureCardContainer}>
      <img src="" alt="Tarjeta física" />
      <div className={styles.rightSecureCardContent}>
        <h2>La tarjeta más segura</h2>
        <div className={styles.benefitsList}>
          <ItemBenefit
            text={"Con la seguridad de Visa y el respaldo de Banesco"}
          />
          <ItemBenefit
            text={"Sin datos impresos, solo tú puedes verlos desde la app"}
          />
          <ItemBenefit
            text={"Con tecnología contactless, paga sin contacto físico"}
          />
          <ItemBenefit
            text={"Protección de precio, paga siempre el precio más bajo"}
          />
        </div>
      </div>
    </section>
  );
};

export default SecureCard;
