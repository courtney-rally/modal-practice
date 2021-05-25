import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import Modal from "./Modal";

function App() {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="App">
      <div className="App-container" style={{ opacity: showModal ? 0.25 : 1 }}>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello World</h1>
        <button onClick={handleOpenModal} disabled={showModal}>
          Show Modal
        </button>
      </div>
      {showModal && <Modal handleCloseModal={handleCloseModal} />}
    </div>
  );
}

export default App;
