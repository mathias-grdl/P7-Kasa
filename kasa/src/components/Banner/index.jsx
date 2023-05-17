import "./index.css";
import React from "react";

function Banner(bannerImg, style, bannerText) {
  return (
    <div className={"banner" + style}>
      <img src={bannerImg} alt="Bannière kasa" />
      <p>{bannerText}</p>
    </div>
  );
}

export default Banner;
