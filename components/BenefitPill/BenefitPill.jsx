import styles from "./BenefitPill.module.scss";

const BenefitPill = ({ benefit = "benefit", selected, filterFn }) => {
  return (
    <button
      data-selected={
        benefit.toLowerCase() === selected.toLowerCase() ? "true" : "false"
      }
      className={styles.benefitPill}
      onClick={() => {
        filterFn(benefit);
      }}
    >
      {benefit}
    </button>
  );
};

export default BenefitPill;
