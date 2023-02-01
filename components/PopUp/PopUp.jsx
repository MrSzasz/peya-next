import Image from "next/image";
import styles from "./PopUp.module.scss";
import MainButton from "../../components/MainButton/MainButton";

const PopUp = ({ fn }) => {
  // const [isOpenForAnimation, setIsOpenForAnimation] = useState(true);

  const toggleModalOnClick = () => {
    // setIsOpenForAnimation(current => !current)
    fn();
  };

  return (
    <div className={styles.popUpBlack}>
      <div className={styles.popUpContainer}>
        <button
          className={styles.closePopUpButton}
          onClick={toggleModalOnClick}
        >
          X
        </button>
        <h3>Escanea el QR y pide tu tarjeta desde tu celular</h3>
        <Image
          src={"/images/qr.png"}
          height={250}
          width={250}
          alt="QR para pedir la tarjeta"
        />
        <MainButton fn={fn} color="buttonBlue" text="Listo" />
      </div>
    </div>
  );
};

export default PopUp;
