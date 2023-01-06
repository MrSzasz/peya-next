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
                "https://pwdh.adj.st/fintech/cards/redirector?adj_t=6t2xp9f_a7g3qbs&adj_deep_link=pedidosya%3A%2F%2Ffintech%2Fcards%2Fredirector&adj_campaign=Landing&adj_adgroup=CTA&adj_creative=Free"
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
