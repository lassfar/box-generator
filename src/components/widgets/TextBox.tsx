import React from "react";
import { EInputType, EInputVariant } from "assets/ts/enums";

interface IInputProps {
  type: EInputType,
  customclass?: string,
  variant?: EInputVariant,
  [key: string | number | symbol]: any,
}

const TextBox: React.FC<IInputProps> = ({
  type,
  variant,
  ...otherProps
}) => {
  return (
    <input
      type={type}
      className={`border-2 border-solid border-gray-300 rounded-lg focus:outline-none focus:border-indigo-400 py-1.5 px-3 /
        ${variant}`}
      {...otherProps}
    />
  );
};

export default TextBox;

TextBox.defaultProps = {
  type: EInputType.text,
  variant: EInputVariant.primary,
  customclass: "",
}
