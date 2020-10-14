import React from "react";
import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";

import { lightTheme } from "./src/styles/theme";
import { Practica2 } from "./src";

export default function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <View style={styles.container}>
        <Practica2 />
        <StatusBar style="dark" />
      </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FEDC5E",
  },
});
