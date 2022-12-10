import $ from "jquery";
import { useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import MainButton from "../MainButton/MainButton";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  const hideNavMenu = () => {
    $("#hideMenuContainer").slideToggle();
  };

  useEffect(() => {
    $("#hideMenuButton").on("click", () => {
      $("#hideMenuContainer").slideToggle().css({
        display: "flex",
      });
    });
  }, []);

  return (
    <nav id="nav" className={styles.navbar}>
      <a href="#hero">
        <img src="/images/peyaPagosLogo.png" alt="Ir al inicio" />
      </a>
      <div className={styles.linksContainer}>
        <ul className={styles.linksContainerList}>
          <li>
            <a href="#cashbackSection">Cashback</a>
          </li>
          <li>
            <a href="#benefitsSection">Beneficios</a>
          </li>
          <li>
            <a href="#secureCardSection">Tarjeta</a>
          </li>
          <li>
            <a href="#pricesSection">Costos</a>
          </li>
        </ul>
        <MainButton />
      </div>
      <button id="hideMenuButton" className={styles.menuNavbar}>
        <AiOutlineMenu color="#ffffff" size={40} />
      </button>
      <div id="hideMenuContainer" className={styles.hiddenMenuContainer}>
        <ul className={styles.hiddenLinksContainerList}>
          <li onClick={hideNavMenu}>Cashback</li>
          <li onClick={hideNavMenu}>Beneficios</li>
          <li onClick={hideNavMenu}>Tarjeta</li>
          <li onClick={hideNavMenu}>Costos</li>
        </ul>
        <MainButton />
      </div>
    </nav>
  );
};

export default Navbar;
