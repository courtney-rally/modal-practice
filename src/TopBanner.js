import React from "react";
import "./TopBanner.css";

function TopBanner({ handleOnClick }) {
  return (
    <div className="banner">
      <div className="close-button" onClick={handleOnClick}>
        X
      </div>
    </div>
  );
}

export default TopBanner;
