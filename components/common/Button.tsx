import React from "react";
import { ButtonProps } from "../../interfaces";

const Button: React.FC<ButtonProps> = ({ label, onClick, type = "button" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="px-4 py-2 rounded-lg bg-black text-white hover:bg-gray-800 transition"
    >
      {label}
    </button>
  );
};

export default Button;
