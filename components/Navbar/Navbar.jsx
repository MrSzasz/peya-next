import $ from "jquery";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import MainButton from "../MainButton/MainButton";
import styles from "./Navbar.module.scss";

const Navbar = ({ fn }) => {
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
        <Image
          src="/demo/logo.png"
          height={45}
          width={100}
          alt="Ir al inicio"
        />
      </a>
      <div className={styles.linksContainer}>
        <ul className={styles.linksContainerList}>
          <li>
            <a href="#cashbackSection">Sección 1</a>
          </li>
          <li>
            <a href="#benefitsSection">Sección 2</a>
          </li>
          <li>
            <a href="#secureCardSection">Sección 4</a>
          </li>
          <li>
            <a href="#pricesSection">Sección 6</a>
          </li>
        </ul>
        <MainButton
          href={
            "https://pwdh.adj.st/fintech/cards/redirector?adj_t=6t2xp9f_a7g3qbs&adj_deep_link=pedidosya%3A%2F%2Ffintech%2Fcards%2Fredirector&adj_campaign=Landing&adj_adgroup=CTA&adj_creative=Header"
          }
          fn={fn}
        />
      </div>
      <button id="hideMenuButton" className={styles.menuNavbar}>
        <AiOutlineMenu color="#ffffff" size={40} />
      </button>
      <div id="hideMenuContainer" className={styles.hiddenMenuContainer}>
        <ul className={styles.hiddenLinksContainerList}>
          <li onClick={hideNavMenu}>
            <a href="#cashbackSection">Sección 1</a>
          </li>
          <li onClick={hideNavMenu}>
            <a href="#benefitsSection">Sección 2</a>
          </li>
          <li onClick={hideNavMenu}>
            <a href="#secureCardSection">Sección 4</a>
          </li>
          <li onClick={hideNavMenu}>
            <a href="#pricesSection">Sección 6</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
