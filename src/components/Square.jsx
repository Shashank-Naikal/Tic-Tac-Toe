import React, { useState } from "react";

const Square = ({ value, handleClick }) => {
  return (
    <div
      className="square"
      style={{
        border: "1px solid",
        height: "100px",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      onClick={handleClick}
    >
      <h5>{value}</h5>
    </div>
  );
};

export default Square;
