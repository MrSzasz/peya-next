import Image from "next/image";
import Link from "next/link";
import ItemSteps from "../ItemSteps/ItemSteps";
import styles from "./Steps.module.scss";

const Steps = () => {
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
            href={
              "https://play.google.com/store/apps/details?id=com.pedidosya&hl=es&referrer=pycat=retention&utm_medium=landing&utm_source=peya&utm_campaign=issuing&utm_content=download"
            }
          >
            <Image
              src="/images/stepsAndroid.svg"
              alt="Link Google Play"
              height={0}
              width={0}
              quality={100}
              sizes="100vw"
              className="w-40 h-auto"
            />
          </Link>
          <Link
            href={
              "https://itunes.apple.com/app/pedidosya/id490099807?utm_medium=landing&utm_source=peya&utm_campaign=issuing&utm_content=download"
            }
          >
            <Image
              src="/images/stepsApple.svg"
              alt="Link App Store"
              height={0}
              width={0}
              quality={100}
              sizes="100vw"
              className="w-40 h-auto"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Steps;
