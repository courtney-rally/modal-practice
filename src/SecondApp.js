import logo from "./logo.svg";
import "./SecondApp.css";
import React, { useEffect, useState } from "react";
import TopBanner from "./TopBanner";

function SecondApp() {
  const [closeBanner, setCloseBanner] = useState(false);

  const handleOnClick = () => {
    setCloseBanner(true);
  };

  useEffect(() => {
    setTimeout(() => setCloseBanner(false), 1000);
  }, [closeBanner]);

  return (
    <div>
      {!closeBanner && <TopBanner handleOnClick={handleOnClick} />}
      <div className="SecondApp">
        <img src={logo} className="SecondApp-logo" alt="logo" />

        <h1>Non</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Posuere
          lorem ipsum dolor sit amet consectetur adipiscing. Faucibus et
          molestie ac feugiat sed lectus vestibulum.
        </p>

        <h1>Nunc</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Sagittis
          nisl rhoncus mattis rhoncus urna neque viverra justo.
        </p>

        <h1>Convallis Convallis</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Porttitor
          eget dolor morbi non arcu risus quis. Dolor sit amet consectetur
          adipiscing elit ut aliquam. Aliquam malesuada bibendum arcu vitae
          elementum. Arcu risus quis varius quam quisque id diam vel quam. Quis
          viverra nibh cras pulvinar mattis nunc sed. Gravida in fermentum et
          sollicitudin ac orci phasellus egestas tellus. Enim blandit volutpat
          maecenas volutpat blandit aliquam etiam. Feugiat sed lectus vestibulum
          mattis ullamcorper velit. Eleifend donec pretium vulputate sapien nec.
          Diam vulputate ut pharetra sit amet aliquam. Dui sapien eget mi proin.
          Dui accumsan sit amet nulla facilisi. Magna eget est lorem ipsum dolor
          sit amet consectetur adipiscing. Consequat nisl vel pretium lectus.
          Interdum consectetur libero id faucibus.
        </p>
      </div>
    </div>
  );
}

export default SecondApp;
