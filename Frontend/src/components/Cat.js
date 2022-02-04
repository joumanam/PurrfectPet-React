import React, { useState } from "react";
import { FaTrash, FaCheck } from "react-icons/fa";
// import { UserContext } from "../UserContext";
import "../index.css";

const Cat = ({ vaccine, onClick, deleteEvent, onToggle }) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);

    // CSS and UX purposes: when model is open, you can't keep scrolling the page in the background
    
  };

  return (
    <div className={vaccine.reminder ? `cat reminder` : `cat`}>
      <h3>
        {vaccine.name}:<span className="shot-nb">{vaccine.shot} </span>
        <FaTrash
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => toggleModal(vaccine.id)}
        />
      </h3>
      <h4 style={{ fontStyle: "italic", fontWeight: "normal" }}>
        {vaccine.date}{" "}
        {!vaccine.reminder ? (
          <span>
            <FaCheck
              style={{
                color: "green",
                justifyContent: "flex-end",
                marginLeft: "auto",
                cursor: 'pointer'
              }}
              onClick={() => onToggle(vaccine.id)}
            ></FaCheck>
          </span>
        ) : (
          <span><h4 onClick={() => onToggle(vaccine.id)} style={{cursor: 'pointer'}}>Pending</h4></span>
          
        )}
      </h4>
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay">
            <div className="modal-content">
              <h2
                style={{
                  color: "red",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                WARNING
              </h2>
              <p>Are you sure you want to remove {vaccine.name}? 😿 </p>
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <button
                  className="btn-modal"
                  style={{ marginRight: "10px" }}
                  onClick={() => deleteEvent(vaccine.id)}
                >
                  {" "}
                  YES{" "}
                </button>
                <button className="btn-modal" onClick={toggleModal}>
                  {" "}
                  NOPE{" "}
                </button>
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cat;
