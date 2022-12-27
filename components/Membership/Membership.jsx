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
                "https://app.adjust.com/jsr?url=https%3A%2F%2Fpwdh.adj.st%2Ffintech%2Fcards%2Fredirector%3Fadj_t%3D6t2xp9f_a7g3qbs%26adj_deep_link%3Dpedidosya%253A%252F%252Ffintech%252Fcards%252Fredirector%26adj_campaign%3Dtest%26adj_adgroup%3Dtest%26adj_creative%3Dtest"
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
