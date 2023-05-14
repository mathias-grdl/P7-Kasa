import "./index.css";
import React from "react";

const Banner = ({ page }) => {
  return (
    // props
    <div className={"bannerContainer" + page}>
      <p>Chez vous, partout et ailleurs</p>
    </div>
  );
};

export default Banner;
