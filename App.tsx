import React from "react";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";

import { lightTheme } from "./src/styles/theme";
import { Practica2 } from "./src/screens/Calculadora";

export default function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <StatusBar style="light" />
      <Practica2 />
    </ThemeProvider>
  );
}
