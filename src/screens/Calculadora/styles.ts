import styled from "styled-components/native";
import { Platform, StatusBar } from "react-native";

export const Calculadora = styled.SafeAreaView`
  flex: 1;
  background-color: #201e1f;
  padding-top: ${Platform.OS === "android"
    ? `${StatusBar.currentHeight}px`
    : 0};
`;

export const Header = styled.View`
  flex: 0.7;
  justify-content: center;
  align-items: center;
`;

export const Marca = styled.Text`
  font-size: ${({ theme }) => theme.font.xs};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Pantalla = styled.View`
  flex: 1.3;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.common.black};
  margin: 0 20px;
  padding: 20px;
  border-radius: 20px;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const Cantidad = styled.Text`
  font-size: ${({ theme }) => theme.font.lg};
  font-weight: 400;
  color: ${({ theme }) => theme.colors.common.white};
`;

export const Botones = styled.View`
  flex: 3;
  padding: 10px;
`;
