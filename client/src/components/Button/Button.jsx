import React from 'react';
import styles from './Button.module.css';

const Button = ({ children, onClick, styleType = "primary", className="" }) => {
  let buttonStyle;

  switch (styleType) {
    case "primary":
      buttonStyle = styles.primaryButton;
      break;
    case "secondary":
      buttonStyle = styles.secondaryButton;
      break;
    default:
      buttonStyle = styles.primaryButton; // Default to primary
      break;
  }

  return (
    <button className={`${styles.button} ${buttonStyle} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;