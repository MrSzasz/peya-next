import $ from "jquery";
import { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
// import { useAppContext } from "../../context/AppContext";
import MainButton from "../MainButton/MainButton";
import styles from "./Navbar.module.scss";
import TagManager from "react-gtm-module";
import Link from "next/link";

const Navbar = ({ fn, links }) => {
  // const [links, setLinks] = useState([]);
  const [windowWidth, setWindowWidth] = useState(null);
  // const { componentLoaded } = useAppContext();

  const GTMClick = (clickedButtonName) => {
    const tagManagerDev = {
      dataLayer: {
        event: "cobranded_request.clicked",
        screenName: clickedButtonName,
      },
      dataLayerName: "userLog",
    };

    TagManager.dataLayer(tagManagerDev);
  };

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
      <a href="/">
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
          {links.map((link, i) => (
            <li key={i} data-page={link.current && "selected"}>
              <Link href={link.href}>{link.page}</Link>
            </li>
          ))}
          {/* <li onClick={() => GTMClick("Benefits")}>
            <a href="#benefitsSection">Beneficios</a>
          </li>
          <li onClick={() => GTMClick("Cards")}>
            <a href="#secureCardSection">Tarjeta</a>
          </li>
          <li onClick={() => GTMClick("Costs")}>
            <a href="#pricesSection">Costos</a>
          </li> */}
        </ul>
        <MainButton
          href={"/promociones"}
          color="buttonTransparent"
          // component="Navbar"
          text="Promociones"
        />
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
          {links.map((link, i) => (
            <li
              onClick={() => {
                hideNavMenu();
              }}
            >
              <Link href={link.href}>{link.page}</Link>
            </li>
          ))}
          {/* <li
            onClick={() => {
              hideNavMenu();
              GTMClick("Benefits");
            }}
          >
            <a href="#benefitsSection">Promociones</a>
          </li>
          <li
            onClick={() => {
              hideNavMenu();
              GTMClick("Cards");
            }}
          >
            <a href="#secureCardSection">Tarjeta</a>
          </li>
          <li
            onClick={() => {
              hideNavMenu();
              GTMClick("Costs");
            }}
          >
            <a href="#pricesSection">Costos</a>
          </li> */}
        </ul>
        <div
          onClick={() => {
            hideNavMenu();
          }}
        >
          <MainButton
            href={"/promociones"}
            color="buttonTransparent"
            // component="Navbar"
            text="Promociones"
          />
        </div>
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
