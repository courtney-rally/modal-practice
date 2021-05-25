import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import Modal from "./Modal";

function App() {
  const [showModal, setShowModal] = useState(true);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>Hello World</h1>
      {showModal && <Modal handleCloseModal={handleCloseModal} />}
    </div>
  );
}

export default App;
