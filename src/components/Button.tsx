'use client'

import { ButtonHTMLAttributes, ReactElement } from "react";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  onClick: () => void;
  disabled?: boolean;
}

const Button = (props: IButtonProps): ReactElement => {
  const { label, onClick, disabled } = props;

  return (
    <button data-testid="custom-button" onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
};

export default Button;