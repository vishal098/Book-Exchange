import React from "react";

const Button = ({ type, style, children, width, onClick = () => {} }) => {
  return (
    <button
      onClick={onClick}
      style={{ ...style, width: width ? width : "100%", height: "max-content" }}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
