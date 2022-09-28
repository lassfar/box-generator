import React, { ReactNode } from "react";

interface IButtonProps {
  customclass: string,
  children: ReactNode,
  [key: string | number | symbol]: any;
}

const Button: React.FC<IButtonProps> = ({
  customclass,
  children,
  ...otherProps
}) => {
  return (
    <button
      type="button"
      className={`py-2 px-3 rounded-lg ${customclass}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
