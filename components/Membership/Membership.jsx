import MainButton from "../MainButton/MainButton";
import styles from "./Membership.module.scss"

const Membership = () => {
  return (
    <section className={styles.membershipContainer}>
      <div className={styles.rightMembershipContent}>
        <p>
          Membresía <span>¡GRATIS!</span> por un año
        </p>
        <MainButton />
      </div>
      <img src="" alt="Tarjeta y smartphone Pedidos Ya" />
    </section>
  );
};

export default Membership;
