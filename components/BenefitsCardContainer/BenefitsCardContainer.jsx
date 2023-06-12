import BenefitCard from "../BenefitCard/BenefitCard";
import styles from "./BenefitsCardContainer.module.scss";

const BenefitsCardContainer = ({ benefitsArray, benefitCardFn }) => {
  return (
    <div className={styles.benefitsCardsContainer}>
      {
        benefitsArray?.length === 0 ? (
          <h3>
            ¡Lo sentimos! No se han encontrado resultados para tu búsqueda. Por
            favor, intenta con otra opción del menú
          </h3>
        ) : (
          benefitsArray?.map((benefit, i) => (
            <BenefitCard
            benefitCardFn={benefitCardFn}
            fullBenefit={benefit}
              key={i}
              title={benefit.benefitTitle}
              startDate={benefit.benefitStartDate}
              endDate={benefit.benefitEndDate}
              imageUrl={benefit.benefitImage}
              description={benefit.benefitDescription}
            />
          ))
        )
      }
    </div>
  );
};

export default BenefitsCardContainer;
