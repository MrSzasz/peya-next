import { useEffect, useState } from "react";
import AddBenefitButton from "../AddBenefitButton/AddBenefitButton";
import styles from "./EditSavedBenefitsCategories.module.scss";

const EditSavedBenefitsCategories = ({ categories }) => {
  const [savedCategories, setSavedCategories] = useState([]);

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
          className="px-6 py-2 bg-yellow-500 rounded-full"
        >
          Add
        </button>
      </div>
    </>
  );
};

export default EditSavedBenefitsCategories;
