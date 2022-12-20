import $ from "jquery";
import { useEffect } from "react";
import styles from "./GoToTop.module.scss";

const GoToTop = () => {
  $(window).on("scroll", () => {
    if ($(window).scrollTop() > 400) {
      $("#goToTopButton").fadeIn().css({ display: "flex" });
    } else {
      $("#goToTopButton").fadeOut();
    }
  });

  useEffect(() => {
    $("#goToTopButton").on("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }, []);

  return (
    <button id="goToTopButton" className={styles.goToTop}>
      <img src="/icons/footer/Arrow.svg" alt="Ir arriba" />
    </button>
  );
};

export default GoToTop;
