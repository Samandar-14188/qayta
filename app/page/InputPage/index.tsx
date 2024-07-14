

'use client'
import React, { useState, useEffect } from "react";
import Input from "@/app/components/input";
import Button from "@/app/components/button";

const InputPage: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [dataList, setDataList] = useState<string[]>([]);
  const [hasError, setHasError] = useState<boolean>(false);

  const handleButtonClick = async () => {
    if (validateUrl(inputValue)) {
      setHasError(false);
      try {
        const response = await fetch("https://api.rebrandly.com/v1/links", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            apikey: "3a702f900194422e86e761053ac7988f",
          },
          body: JSON.stringify({
            destination: inputValue,
          }),
        });

        if (response.ok) {
          const data = await response.json();
          setDataList([...dataList, data.shortUrl]);
          setInputValue("");
        } else {
          setHasError(true);
        }
      } catch (error) {
        console.error("Error while shortening URL:", error);
        setHasError(true);
      }
    } else {
      setHasError(true);
    }
  };

  const handleInputBlur = () => {
    if (!validateUrl(inputValue)) {
      setHasError(true);
    }
  };

  const validateUrl = (url: string): boolean => {
    const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
    return urlRegex.test(url);
  };

  return (
    <div className="InputPage-container">
      <div className={`Input-container ${hasError ? "error" : ""}`}>
        <div className="input-wrapper">
          <Input
            placeholder="Shorten a link here..."
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
              setHasError(false);
            }}
            onBlur={handleInputBlur}
          />
          {hasError && <p className="error-message">Please add  link</p>}
        </div>
        <Button text="Shorten It!" onClick={handleButtonClick} />
      </div>
      <div>
        {dataList.map((item, index) => (
          <div key={index} className="todo-list">
    <span>{dataList[0]}</span> 
            <div className="Btn-todo">
              <span className="URL">{item}</span>
              <Button text="Copy" copyText={item} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InputPage;
