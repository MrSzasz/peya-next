import $ from "jquery";
import styles from "./GoToTop.module.scss";

const GoToTop = () => {
  $(window).on("scroll", () => {
    if ($(window).scrollTop() > 400) {
      $("#goToTopButton").fadeIn().css({display: "flex"});
    } else {
      $("#goToTopButton").fadeOut();
    }
  });

  return (
    <a href="#hiddenTop" id="goToTopButton" className={styles.goToTop}>
      <img src="/icons/footer/Arrow.svg" alt="Ir arriba" />
    </a>
  );
};

export default GoToTop;
