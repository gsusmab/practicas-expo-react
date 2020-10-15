import { DefaultTheme } from "styled-components/native";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      common: {
        white: string;
        black: string;
        gray: string;
      };
      primary: string;
      secondary: string;
      button: string;
      text: string;
    };
    font: {
      xs: string;
      sm: string;
      lg: string;
    };
  }
}

export const lightTheme: DefaultTheme = {
  colors: {
    common: {
      white: "#FFFFFF",
      black: "#343233",
      gray: "#878687",
    },
    primary: "#FEDC5E",
    secondary: "#201e1f",
    button: "#FFD956",
    text: "#262525",
  },
  font: {
    xs: "14px",
    sm: "18px",
    lg: "48px",
  },
};
