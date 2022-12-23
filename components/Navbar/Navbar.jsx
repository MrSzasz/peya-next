import $ from "jquery";
import { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import MainButton from "../MainButton/MainButton";
import styles from "./Navbar.module.scss";

const Navbar = ({ pedirYa="#" }) => {
  const [windowWidth, setWindowWidth] = useState(null);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

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
        <img
          src={
            windowWidth > 500
              ? "/images/peyaPagosLogo.svg"
              : "/images/logoMobile.svg"
          }
          alt="Ir al inicio"
        />
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
        <MainButton href={pedirYa} />
      </div>
      <button id="hideMenuButton" className={styles.menuNavbar}>
        <AiOutlineMenu color="#ffffff" size={40} />
      </button>
      <div id="hideMenuContainer" className={styles.hiddenMenuContainer}>
        <ul className={styles.hiddenLinksContainerList}>
          <li onClick={hideNavMenu}>
            <a href="#cashbackSection">Cashback</a>
          </li>
          <li onClick={hideNavMenu}>
            <a href="#benefitsSection">Beneficios</a>
          </li>
          <li onClick={hideNavMenu}>
            <a href="#secureCardSection">Tarjeta</a>
          </li>
          <li onClick={hideNavMenu}>
            <a href="#pricesSection">Costos</a>
          </li>
        </ul>
        <MainButton href={pedirYa} />
      </div>
    </nav>
  );
};

export default Navbar;
