import React from "react";

function CardButton({ img, title, time, onclick, color }) {
  return (
    <div className="card-button">
      <div
        className="bg-card"
        style={{
          backgroundColor: color,
        }}
      >
        <div className="card-imgbtn-content">
          <img src={img} alt="card-image" className="card-imgbtn" />
        </div>
      </div>
      <div className="card-btn-content">
        <p className="card-btn-title">{title}</p>
        <p className="card-btn-time">{time}</p>
        <button
          style={{ backgroundColor: color, marginTop: 10 }}
          onClick={onclick}
        >
          Registrar
        </button>
      </div>
    </div>
  );
}

export default CardButton;
