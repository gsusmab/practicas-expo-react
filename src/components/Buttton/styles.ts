import styled from "styled-components/native";

interface StyledTextProps {
  highligh: "default" | "yellow" | "white";
  primary: boolean;
}

interface StyledBtnProps {
  primary: boolean;
  size: "default" | "double";
}

export const StyledButton = styled.TouchableHighlight<StyledBtnProps>`
  flex: ${({ size }) => (size === "double" ? "2" : "1")};
  margin: 10px;
  background-color: ${({ primary, theme }) =>
    primary ? theme.colors.primary : theme.colors.secondary};
  border-radius: 25px;
  align-items: center;
  justify-content: center;
`;

export const StyledText = styled.Text<StyledTextProps>`
  color: ${({ highligh, theme, primary }) =>
    primary || highligh === "white"
      ? theme.colors.common.white
      : highligh === "yellow"
      ? theme.colors.primary
      : theme.colors.common.gray};
  font-size: ${({ theme }) => theme.font.sm};
  font-weight: bold;
`;
