import Image from "next/image";
import styles from "./BenefitCard.module.scss";

const BenefitCard = ({
  title,
  description,
  imageUrl,
  startDate,
  endDate,
  benefitCardFn,
  fullBenefit,
}) => {
  return (
    <div
      className={styles.benefitCardContainer}
      onClick={() => benefitCardFn(fullBenefit)}
    >
      <div className={styles.imageBenefitCardContainer}>
        <Image
          src={imageUrl}
          alt={`${title} imagen`}
          height={0}
          width={0}
          quality={80}
          sizes="100vw"
          className="w-full h-auto"
        ></Image>
        <p>
          {startDate.split("-").reverse().join("/")} hasta {endDate.split("-").reverse().join("/")}
        </p>
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default BenefitCard;
