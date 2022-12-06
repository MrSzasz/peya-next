import ItemBenefit from '../ItemBenefit/ItemBenefit';
import styles from './SecureCard.module.scss'

const SecureCard = () => {
  return (
    <section className={styles.secureCardContainer}>
      <img src="" alt="Tarjeta física" />
      <div className={styles.rightSecureCardContent}>
        <h2>La tarjeta más segura</h2>
        <ItemBenefit />
        <ItemBenefit />
        <ItemBenefit />
        <ItemBenefit />
      </div>
    </section>
  );
};

export default SecureCard;
