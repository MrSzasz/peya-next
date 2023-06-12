import { useEffect, useState } from "react";
import AddBenefitButton from "../AddBenefitButton/AddBenefitButton";
import styles from "./EditSavedBenefitsCategories.module.scss";

const EditSavedBenefitsCategories = ({ categories }) => {
  const [savedCategories, setSavedCategories] = useState([]);

  // console.log(categories)
  // setSavedCategories(categories)

  useEffect(() => {
    setSavedCategories(categories);
  }, []);

  return (
    <>
      <div
        className={styles.currentBenefitsContainer}
        id="currentBenefitsContainer"
      >
        {savedCategories.map((category, i) => (
          <AddBenefitButton key={i} benefitTitle={category} />
        ))}
        <button
          type="button"
          onClick={() => {
            setSavedCategories([...savedCategories, ""]);
          }}
        >
          Add
        </button>
      </div>
    </>
  );
};

export default EditSavedBenefitsCategories;
