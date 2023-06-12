import BenefitPill from "../../components/BenefitPill/BenefitPill";
import styles from "./BenefitsFilter.module.scss";

const BenefitsFilter = ({ category, selectedCategory, filterFunction }) => {
  return (
    <div className={styles.benefitsFilterContainer}>
      <BenefitPill
        selected={selectedCategory}
        benefit={"Todo"}
        filterFn={filterFunction}
      />
      {category?.map((cat, i) => (
        <BenefitPill
          selected={selectedCategory}
          key={i}
          benefit={cat}
          filterFn={filterFunction}
        />
      ))}
    </div>
  );
};

export default BenefitsFilter;
