import styled from "styled-components/native";

export const StyledButton = styled.TouchableOpacity`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.button};
  margin: 5px;
  border-radius: 25px;
  align-items: center;
  justify-content: center;
`;

export const StyledText = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.font.sm};
  font-weight: bold;
`;
