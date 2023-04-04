import Link from "next/link";
import { useAppContext } from "../../context/AppContext";
import ItemSteps from "../ItemSteps/ItemSteps";
import styles from "./Steps.module.scss";

const Steps = () => {
  const { componentLoaded } = useAppContext();

  return (
    <section className={styles.stepsContainer}>
      <h2>Disfrutala ya</h2>
      <div className={styles.itemStepsContainer}>
        <ItemSteps
          title={"Regístrate"}
          text={"Completa tus datos"}
          img={"/icons/steps/icon1.svg"}
          imgAlt={"Registro"}
          special={true}
        />
        <ItemSteps
          title={"Recibe"}
          text={
            "Activamos tu tarjeta virtual de inmediato mientras enviamos la física en 72hs máximo"
          }
          img={"/icons/steps/icon2.svg"}
          imgAlt={"Envío"}
          second={true}
        />
        <ItemSteps
          title={"Compra ya"}
          text={"¡Listo! Puedes disfrutar de tus cashback todos los días"}
          img={"/icons/steps/icon3.svg"}
          imgAlt={"Uso"}
        />
      </div>
      <div className={styles.stepsDownloads}>
        <h3>Descarga la App</h3>
        <div className={styles.stepsDownloadsIcons}>
          <Link
            onClick={() => {
              componentLoaded(
                "clickedButtons",
                "sectionName",
                "Instructions",
                "cobranded_download.clicked",
                "android"
              );
            }}
            href={
              "https://play.google.com/store/apps/details?id=com.pedidosya&hl=es&referrer=pycat=retention&utm_medium=landing&utm_source=peya&utm_campaign=issuing&utm_content=download"
            }
            target="_blank"
          >
            <img src="/images/stepsAndroid.svg" alt="Link Google Play" />
          </Link>
          <Link
            onClick={() => {
              componentLoaded(
                "clickedButtons",
                "sectionName",
                "Instructions",
                "cobranded_download.clicked",
                "apple"
              );
            }}
            href={
              "https://itunes.apple.com/app/pedidosya/id490099807?utm_medium=landing&utm_source=peya&utm_campaign=issuing&utm_content=download"
            }
            target="_blank"
          >
            <img src="/images/stepsApple.svg" alt="Link App Store" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Steps;
