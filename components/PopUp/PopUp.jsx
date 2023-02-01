import Image from "next/image";
import styles from "./PopUp.module.scss";
import MainButton from "../../components/MainButton/MainButton";
import { motion } from "framer-motion";
import { isMobile } from "react-device-detect";
import Link from "next/link";

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
        {isMobile ? (
          <>
            <h2>Mira mis otros trabajos</h2>
            <Link href={"https://lugo-tomas-portfolio.netlify.app/"}>Ir al portfolio</Link>
          </>
        ) : (
          <>
            <h3>Escanea el QR y mira mis otros trabajos</h3>
            <Image
              src={"/demo/qr-demo.svg"}
              height={250}
              width={250}
              alt="QR para pedir la tarjeta"
            />
          </>
        )}
        <MainButton fn={fn} color="buttonBlue" text="Listo" />
      </motion.div>
    </motion.div>
  );
};

export default PopUp;
