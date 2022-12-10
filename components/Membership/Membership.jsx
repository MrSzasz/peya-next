import MainButton from "../MainButton/MainButton";
import styles from "./Membership.module.scss";
import { motion } from "framer-motion";

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
      <motion.img
        src="/images/membershipImg.png"
        alt="Tarjeta y smartphone Pedidos Ya"
        key={5}
        initial={{
          transform: "translateY(+100%)",
        }}
        whileInView={{
          transform: "translateY(0%)",
          transition: {
            duration: 1,
            type: "tween",
            damping: 25,
            stiffness: 500,
          },
        }}
        exit={{
          transform: "translateY(0%)",
        }}
      />
    </section>
  );
};

export default Membership;
