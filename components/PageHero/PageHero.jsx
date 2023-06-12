import styles from "./PageHero.module.scss";

const PageHero = ({ title, text, bgImageUrl="https://ih1.redbubble.net/image.317590668.0313/flat,800x800,075,f.u4.jpg" }) => {
  return (
    <div
      className={styles.pageHeroContainer}
      style={{ backgroundImage: `url(${bgImageUrl})` }}
    >
      <div className={styles.pageHeroContent}>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default PageHero;
