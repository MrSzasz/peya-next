import styles from "./PageTag.module.scss"

const PageTag = ({ page = "main" }) => {
  return (
    <div className={styles.pageTagContainer}>
      <h1>{page}</h1>
    </div>
  );
};

export default PageTag;
