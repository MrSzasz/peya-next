import Image from "next/image";
import styles from "./PopUp.module.scss";
import MainButton from "../../components/MainButton/MainButton";
import { motion } from "framer-motion";

const PopUp = ({ fn }) => {
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
        <h3>Escanea el QR y pide tu tarjeta desde tu celular</h3>
        <Image
          src={"/images/qr.svg"}
          height={250}
          width={250}
          alt="QR para pedir la tarjeta"
        />
        <MainButton fn={fn} color="buttonBlue" text="Listo" component="popUp" />
      </motion.div>
    </motion.div>
  );
};

export default PopUp;
