import styles from "./AddBenefitButton.module.scss";
import { MdDelete } from "react-icons/md";
import $ from "jquery";

const AddBenefitButton = ({ benefitTitle }) => {
  return (
    <div className={styles.addBenefitButtonContainer} id={`${benefitTitle}-ID`}>
      <input type="text" defaultValue={benefitTitle} required />
      <button
        type="button"
        onClick={() => {
          $(`#${benefitTitle}-ID`).remove();
        }}
      >
        <MdDelete />
      </button>
    </div>
  );
};

export default AddBenefitButton;
