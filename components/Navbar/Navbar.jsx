import { AiOutlineMenu } from "react-icons/ai";
import MainButton from "../MainButton/MainButton";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <nav id="nav" className={styles.navbar}>
      <img src="/images/peyaPagosLogo.png" alt="Ir al inicio" />
      <div className={styles.linksContainer}>
        <ul className={styles.linksContainerList}>
          <li>Cashback</li>
          <li>Beneficios</li>
          <li>Tarjeta</li>
          <li>Costos</li>
        </ul>
        <MainButton />
      </div>
      <button className={styles.menuNavbar}>
        <AiOutlineMenu color="#ffffff" size={40} />
      </button>
    </nav>
  );
};

export default Navbar;
