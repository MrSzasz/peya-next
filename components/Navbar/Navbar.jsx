import MainButton from "../MainButton/MainButton";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}></div>
      <ul className={styles.linksContainer}>
        <li>Beneficios</li>
        <li>Cashback</li>
        <li>Financiero</li>
        <li>Promociones</li>
        <li>FAQ</li>
      </ul>
      <MainButton/>
    </nav>
  );
};

export default Navbar;
