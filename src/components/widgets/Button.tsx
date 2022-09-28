import React, { ReactNode } from "react";
import { EButtonVariant } from "assets/ts/enums";

interface IButtonProps {
  variant?: EButtonVariant,
  customclass?: string,
  children: ReactNode,
  [key: string | number | symbol]: any;
}

const Button: React.FC<IButtonProps> = ({
  variant,
  children,
  customclass,
  ...otherProps
}) => {
  return (
    <button
      className={`${variant} py-1.5 px-3 rounded-lg ${customclass}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;

Button.defaultProps = {
  variant: EButtonVariant.primary,
  customclass: "",
}
