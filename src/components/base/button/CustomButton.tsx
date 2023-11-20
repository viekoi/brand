// CustomButton.js

import React from "react";
import styles from "./CustomButton.module.scss";

interface CustomButtonProps {
  onClick?: () => void;
  backgroundColor?: string;
  textColor?: string;
  outline: boolean;
  height?: string;
  width?: string;
  padding?: string;
  children?: React.ReactNode;
  type?: string;
  disable?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  padding,
  backgroundColor,
  textColor,
  outline,
  children,
  height,
  width,
  onClick,
  type,
  disable,
}) => {
  const buttonStyle = {
    backgroundColor: backgroundColor ? backgroundColor : "#0d6efd",
    color: textColor ? textColor : "#fff",
    border: outline ? "1px solid #dee2e7 " : "none",
    height: height ? height : "100%",
    width: width ? width : "100%",
    padding: padding ? `${padding}` : "0 16px",
    type: type ? type : "button",
    disable: disable ? disable : false,
  };

  return (
    <button
      onClick={onClick}
      className={styles[`custom-button`]}
      style={buttonStyle}
    >
      {children}
    </button>
  );
};

export default CustomButton;
