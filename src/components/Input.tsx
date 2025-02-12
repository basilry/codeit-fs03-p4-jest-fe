"use client";

import React, { InputHTMLAttributes, ReactElement } from "react";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Input = ({ label, ...rest }: IInputProps): ReactElement => {
  return (
    <label>
      {label && <span>{label}</span>}
      <input {...rest} />
    </label>
  );
};

export default Input;