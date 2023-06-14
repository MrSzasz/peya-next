import styles from "./AddBenefitCard.module.scss";

const AddBenefitCard = ({
  categories,
  edit,
  benefit,
  deleteElementFn,
  saveElementFn,
}) => {
  return (
    <div className={styles.benefitCardContainer}>
      {edit && <img src={benefit.benefitImage} />}
      <select
        name="benefitCategory"
        id="benefitCategory"
        defaultValue={benefit.benefitCategory}
      >
        {categories.map((category, i) => (
          <option key={i * 2} value={category.toLowerCase()}>
            {category.toUpperCase()}
          </option>
        ))}
      </select>
      {!edit && (
        <input
          type="file"
          name="benefitImage"
          id="benefitImage"
          accept="image/webp"
          onChange={(e) => {
            if (e.target.files[0].size > 2097152) {
              alert("La imagen tiene que pesar menos de 2MB");
              e.target.value = "";
            }
          }}
        />
      )}
      <input
        type="text"
        id="benefitTitle"
        name="benefitTitle"
        defaultValue={benefit.benefitTitle}
      />
      <textarea
        name="benefitDescription"
        id="benefitDescription"
        cols="30"
        rows="10"
        defaultValue={benefit.benefitDescription}
      ></textarea>
      <div className={styles.benefitDateContainer}>
        <input
          type="date"
          name="benefitStartDate"
          id="benefitStartDate"
          defaultValue={benefit.benefitStartDate}
        />
        <input
          type="date"
          name="benefitEndDate"
          id="benefitEndDate"
          defaultValue={benefit.benefitEndDate}
        />
      </div>
      <textarea
        name="benefitTyC"
        id="benefitTyC"
        cols="30"
        rows="10"
        defaultValue={benefit.benefitTyC}
      ></textarea>
      {edit && (
        <button
          className={styles.editElementButton}
          onClick={(e) => {
            saveElementFn(e, benefit.id);
          }}
        >
          Guardar
        </button>
      )}
      <button
        className={styles.deleteElementButton}
        onClick={(e) => {
          deleteElementFn(e, benefit.id, benefit.benefitImage);
        }}
      >
        Eliminar
      </button>
    </div>
  );
};

export default AddBenefitCard;
