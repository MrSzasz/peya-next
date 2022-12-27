import $ from "jquery";
import { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import MainButton from "../MainButton/MainButton";
import styles from "./Navbar.module.scss";

const Navbar = () => {
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
        <MainButton
          href={
            "https://app.adjust.com/jsr?url=https%3A%2F%2Fpwdh.adj.st%2Ffintech%2Fcards%2Fredirector%3Fadj_t%3D6t2xp9f_a7g3qbs%26adj_deep_link%3Dpedidosya%253A%252F%252Ffintech%252Fcards%252Fredirector%26adj_campaign%3Dtest%26adj_adgroup%3Dtest%26adj_creative%3Dtest"
          }
        />
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
        <MainButton
          href={
            "pedidosya://fintech/cards/redirector?utm_medium=landing&utm_source=peya&utm_campaign=issuing&utm_content=head"
          }
          color="navbar"
        />
      </div>
    </nav>
  );
};

export default Navbar;
