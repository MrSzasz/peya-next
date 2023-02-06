import Image from "next/image";
import styles from "./ItemBenefit.module.scss";

const ItemBenefit = ({ img, imgAlt, text }) => {
  return (
    <div className={styles.itemBenefitContainer}>
      <Image
        src={img}
        alt={imgAlt}
        height={0}
        width={0}
        quality={100}
        sizes="100vw"
      />
      <p>{text}</p>
    </div>
  );
};

export default ItemBenefit;
