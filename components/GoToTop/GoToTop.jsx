import $ from "jquery";
import Image from "next/image";
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
      <Image
        src="/icons/footer/Arrow.svg"
        alt="Ir arriba"
        height={0}
        width={0}
        sizes="100vw"
        className="w-4 h-auto"
      />
    </button>
  );
};

export default GoToTop;
