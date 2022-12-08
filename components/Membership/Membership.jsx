import MainButton from "../MainButton/MainButton";
import styles from "./Membership.module.scss";

const Membership = () => {
  return (
    <section className={styles.membershipContainer}>
      <div className={styles.rightMembershipContent}>
        <p>
          Membresía <span>¡GRATIS!</span> por un año
        </p>
        <MainButton />
      </div>
      <div className={styles.phoneImage}></div>
      <img
        src="/images/membershipImg.png"
        alt="Tarjeta y smartphone Pedidos Ya"
      />
    </section>
  );
};

export default Membership;
