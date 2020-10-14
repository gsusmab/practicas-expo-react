import React from "react";

import { StyledButton, StyledText } from "./style";

type ButtonProps = {
  onPress: () => void;
  text: string;
};

export const Button = ({ onPress, text }: ButtonProps) => {
  return (
    <StyledButton onPress={onPress}>
      <StyledText>{text}</StyledText>
    </StyledButton>
  );
};
