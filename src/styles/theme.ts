import { DefaultTheme } from "styled-components/native";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      button: string;
      text: string;
    };
    font: {
      sm: number;
    };
  }
}

export const lightTheme: DefaultTheme = {
  colors: {
    primary: "#FEDC5E",
    button: "#FFD956",
    text: "#262525",
  },
  font: {
    sm: 16,
  },
};
