import React from "react";

import { StyledButton, StyledText } from "./styles";

type ButtonProps = {
  onPress: () => void;
  text: string;
  highlighText?: "default" | "yellow" | "white";
  primary?: boolean;
  size?: "default" | "double";
};

export const Button = ({
  onPress,
  text,
  highlighText = "default",
  primary = false,
  size = "default",
}: ButtonProps) => {
  return (
    <StyledButton
      onPress={onPress}
      underlayColor="#373536"
      primary={primary}
      size={size}
      activeOpacity={0.85}
    >
      <StyledText primary={primary} highligh={highlighText}>
        {text}
      </StyledText>
    </StyledButton>
  );
};
