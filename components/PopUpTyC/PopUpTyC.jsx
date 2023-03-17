import Image from "next/image";
import styles from "./PopUpTyC.module.scss";
import MainButton from "../MainButton/MainButton";
import { motion } from "framer-motion";

const PopUpTyC = ({ fn, data }) => {
  return (
    <motion.div
      className={styles.popUpBlack}
      onClick={fn}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
      }}
    >
      <motion.div
        className={styles.popUpContainer}
        initial={{ y: "-100" }}
        animate={{
          y: 0,
          transition: {
            duration: 0.5,
            type: "tween",
            damping: 25,
            stiffness: 500,
          },
        }}
        exit={{
          y: "-100",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className={styles.closePopUpButton} onClick={fn}>
          <Image
            src={"/icons/popup/Vector.svg"}
            height="12"
            width="12"
            alt="Botón para cerrar el modal"
          />
        </button>
        <h3>Términos y condiciones</h3>
        <p>{data}</p>
      </motion.div>
    </motion.div>
  );
};

export default PopUpTyC;
