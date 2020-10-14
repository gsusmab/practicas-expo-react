import React from "react";
import { Image, StyleSheet, Text } from "react-native";

export const Practica1 = () => {
  return (
    <>
      <Image style={styles.img} source={require("../assets/cursor.gif")} />
      <Text style={styles.text}>
        ¡Hola, <Text style={styles.span}>mundo</Text>!
      </Text>
    </>
  );
};

const styles = StyleSheet.create({
  img: {
    width: 128,
    height: 128,
  },
  text: {
    fontSize: 14,
  },
  span: {
    fontWeight: "bold",
  },
});
