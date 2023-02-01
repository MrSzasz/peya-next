import MainButton from "../MainButton/MainButton";
import styles from "./Membership.module.scss";
import { motion } from "framer-motion";

const Membership = ({ fn }) => {
  return (
    <>
      <div className={styles.membershipContainerWrapper}>
        <section className={styles.membershipContainer}>
          <div className={styles.rightMembershipContent}>
            <p>
              Lorem ipsum <span>DOLOR</span> sit amet
            </p>
            <MainButton
              fn={fn}
            />
          </div>
          <motion.img
            className={styles.membershipCardImg}
            src="/demo/membership/membership.png"
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
