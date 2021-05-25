import React from "react";
import "./Modal.css";

function Modal(props) {
  const { handleCloseModal } = props;

  return (
    <div className="modal">
      <div className="overlay">
        <div className="modal-content">
          <h2>Hello from the modal</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
            deserunt corrupti, ut fugit magni qui quasi nisi amet repellendus
            non fuga omnis a sed impedit explicabo accusantium nihil doloremque
            consequuntur.
          </p>
          <button onClick={handleCloseModal}>Not now, later</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
