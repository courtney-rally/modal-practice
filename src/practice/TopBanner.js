import React from "react";
import "./TopBanner.css";

function TopBanner({ handleOnClick }) {
  return (
    <div className="top-banner">
      <div className="close-button" onClick={handleOnClick}>
        X
      </div>
      <p>
        Some text inside of a p tag. Some more text. And more. And more still.
      </p>
    </div>
  );
}

export default TopBanner;
