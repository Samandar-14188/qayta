import React from 'react';

interface InputProps {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
}

const Input: React.FC<InputProps> = ({ placeholder, value, onChange, onBlur }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
    />
  );
};

export default Input;
