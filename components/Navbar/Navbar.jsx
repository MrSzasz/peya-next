import $ from "jquery";
import { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { useAppContext } from "../../context/AppContext";
import MainButton from "../MainButton/MainButton";
import styles from "./Navbar.module.scss";

const Navbar = ({ fn }) => {
  const [windowWidth, setWindowWidth] = useState(null);
  const { componentLoaded } = useAppContext();

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
            <a
              href="#cashbackSection"
              onClick={() =>
                componentLoaded(
                  "clickedButtons",
                  "buttonName",
                  "Cashback",
                  "cobranded_section_button.clicked"
                )
              }
            >
              Cashback
            </a>
          </li>
          <li
            onClick={() =>
              componentLoaded(
                "clickedButtons",
                "buttonName",
                "Benefits",
                "cobranded_section_button.clicked"
              )
            }
          >
            <a href="#benefitsSection">Beneficios</a>
          </li>
          <li
            onClick={() =>
              componentLoaded(
                "clickedButtons",
                "buttonName",
                "Cards",
                "cobranded_section_button.clicked"
              )
            }
          >
            <a href="#secureCardSection">Tarjeta</a>
          </li>
          <li
            onClick={() =>
              componentLoaded(
                "clickedButtons",
                "buttonName",
                "Costs",
                "cobranded_section_button.clicked"
              )
            }
          >
            <a href="#pricesSection">Costos</a>
          </li>
        </ul>
        <MainButton
          href={
            "https://pwdh.adj.st/fintech/cards/redirector?adj_t=6t2xp9f_a7g3qbs&adj_deep_link=pedidosya%3A%2F%2Ffintech%2Fcards%2Fredirector&adj_campaign=Landing&adj_adgroup=CTA&adj_creative=Header"
          }
          fn={fn}
          component="Navbar"
        />
      </div>
      <button id="hideMenuButton" className={styles.menuNavbar}>
        <AiOutlineMenu color="#ffffff" size={40} />
      </button>
      <div id="hideMenuContainer" className={styles.hiddenMenuContainer}>
        <ul className={styles.hiddenLinksContainerList}>
          <li
            onClick={() => {
              hideNavMenu,
                componentLoaded(
                  "clickedButtons",
                  "buttonName",
                  "Cashback",
                  "cobranded_section_button.clicked"
                );
            }}
          >
            <a href="#cashbackSection">Cashback</a>
          </li>
          <li
            onClick={() => {
              hideNavMenu,
                componentLoaded(
                  "clickedButtons",
                  "buttonName",
                  "Benefits",
                  "cobranded_section_button.clicked"
                );
            }}
          >
            <a href="#benefitsSection">Beneficios</a>
          </li>
          <li
            onClick={() => {
              hideNavMenu,
                componentLoaded(
                  "clickedButtons",
                  "buttonName",
                  "Cards",
                  "cobranded_section_button.clicked"
                );
            }}
          >
            <a href="#secureCardSection">Tarjeta</a>
          </li>
          <li
            onClick={() => {
              hideNavMenu,
                componentLoaded(
                  "clickedButtons",
                  "buttonName",
                  "Costs",
                  "cobranded_section_button.clicked"
                );
            }}
          >
            <a href="#pricesSection">Costos</a>
          </li>
        </ul>
        <MainButton
          href={
            "https://pwdh.adj.st/fintech/cards/redirector?adj_t=6t2xp9f_a7g3qbs&adj_deep_link=pedidosya%3A%2F%2Ffintech%2Fcards%2Fredirector&adj_campaign=Landing&adj_adgroup=CTA&adj_creative=Header"
          }
          color="navbar"
          component="Navbar"
        />
      </div>
    </nav>
  );
};

export default Navbar;
