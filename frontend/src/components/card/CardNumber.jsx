import React from "react";

function cardNumber({ number, title, icon }) {
  return (
    <div className="card-num">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <p style={{ fontSize: 35, fontWeight: "bold" }}>{number}</p>
        <div className="card-num-icon">
          <svg
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {icon}
          </svg>
        </div>
      </div>
      <p className="card-num-title">{title}</p>
    </div>
  );
}

export default cardNumber;
