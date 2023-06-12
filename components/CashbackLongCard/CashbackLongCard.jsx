import React from "react";
import MainButton from "../MainButton/MainButton";
import Image from "next/image";
import styles from "./CashbackLongCard.module.scss";

const CashbackLongCard = ({
  number,
  where,
  imgUrl,
  imgAlt,
  title,
  text,
  bgColor,
  textColor,
  blueSpan,
  inverted,
  buttonColor,
  mainImgUrl,
  bgSizeSpecial,
  fn,
}) => {
  return (
    <div
      className={styles.longCardContainer}
      style={{
        backgroundColor: bgColor,
        color: textColor,
        flexDirection: inverted,
      }}
    >
      <div className={styles.longCardContainerLeft}>
        <div
          className={styles.longCardContainerLeftTop}
          style={blueSpan && { color: "#004ADD" }}
        >
          <span>{number}%</span>
          <div>
            <h3>{where}</h3>
            {imgUrl && <img src={imgUrl} alt={imgAlt} />}
          </div>
        </div>
        <h4>{title}</h4>
        <p>{text}</p>
        <MainButton
          href={
            "https://pwdh.adj.st/fintech/cards/redirector?adj_t=6t2xp9f_a7g3qbs&adj_deep_link=pedidosya%3A%2F%2Ffintech%2Fcards%2Fredirector&adj_campaign=Landing&adj_adgroup=CTA&adj_creative=Free"
          }
          fn={fn}
          color={buttonColor}
          component="Benefits"
        />
      </div>
      <div
        className={styles.longCardContainerRight}
        style={{
          backgroundImage: `url(${mainImgUrl})`,
          backgroundSize: `${bgSizeSpecial}`,
        }}
      ></div>
    </div>
  );
};

export default CashbackLongCard;
