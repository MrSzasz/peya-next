import MainButton from "../MainButton/MainButton";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}></div>
<div className={styles.linksContainer}>
        <ul className={styles.linksContainerList}>
          <li>Cashback</li>
          <li>Beneficios</li>
          <li>Tarjeta</li>
          <li>Costos</li>
        </ul>
        <MainButton/>
</div>
    </nav>
  );
};

export default Navbar;
