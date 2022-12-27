import MainButton from "../MainButton/MainButton";
import styles from "./Membership.module.scss";
import { motion } from "framer-motion";

const Membership = () => {
  return (
    <>
      <div className={styles.membershipContainerWrapper}>
        <section className={styles.membershipContainer}>
          <div className={styles.rightMembershipContent}>
            <p>
              Membresía <span>¡GRATIS!</span> por un año
            </p>
            <MainButton
              href={
                "https://www.pedidosya.com/fintech/cards/redirector?utm_medium=landing&utm_source=peya&utm_campaign=issuing&utm_content=Free"
              }
            />
          </div>
          <motion.img
            className={styles.membershipCardImg}
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
            viewport={{ once: true }}
            exit={{
              transform: "translateY(0%)",
            }}
          />
        </section>
      </div>
    </>
  );
};

export default Membership;
