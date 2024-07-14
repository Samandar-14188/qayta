'use client'
import React, { useState } from "react";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  copyText?: string;
}

const Button: React.FC<ButtonProps> = ({ text, onClick, copyText }) => {
  const [copied, setCopied] = useState(false);

  const handleButtonClick = () => {
    if (onClick) {
      onClick();
      if (copyText) {
        try {
          const textArea = document.createElement("textarea");
          textArea.value = copyText;
          document.body.appendChild(textArea);
          textArea.select();
          document.execCommand("copy");
          document.body.removeChild(textArea);
  
          setCopied(true);
          setTimeout(() => setCopied(false), 1500);
        } catch (error) {
          console.error("Error while copying text:", error);
        }
      }
    }
  };
  

  return (
    <button className={`Btn ${copied ? "Copied" : ""}`} onClick={handleButtonClick}>
      {copied ? "Copied" : text}
    </button>
  );
};

export default Button;
