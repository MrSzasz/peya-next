import $ from "jquery";
import styles from "./GoToTop.module.scss";

const GoToTop = () => {
  $(window).on("scroll", () => {
    if ($(window).scrollTop() > 200) {
      $("#goToTopButton").fadeIn();
    } else {
      $("#goToTopButton").fadeOut();
    }
  });

  return (
    <a href="#nav" id="goToTopButton" className={styles.goToTop}>
      <img src="/icons/footer/Arrow.svg" alt="Ir arriba" />
    </a>
  );
};

export default GoToTop;
