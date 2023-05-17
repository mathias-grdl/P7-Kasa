import "./index.css";
import React from "react";

function Banner(bannerImg) {
  return (
    <div className={"banner"}>
      <img src={bannerImg} alt="Bannière kasa" />
      {/* <p></p> */}
    </div>
  );
}

export default Banner;
