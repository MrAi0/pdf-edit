import React from "react";
import { CustomButtonProps } from "./CustomButton.props";

const CustomButton = (props: CustomButtonProps) => {
  return (
    <div>
      <button onClick={props.onClick}>{props.children}</button>
    </div>
  );
};

export default CustomButton;
