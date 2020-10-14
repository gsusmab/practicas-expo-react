import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "./components/Buttton";
import { Row } from "./components/Row";

export const Practica2 = () => {
  return (
    <>
      <View style={styles.header}>
        <Text>gsusmab</Text>
      </View>

      <View style={styles.screen}>
        <Text>Value</Text>
      </View>

      <View style={styles.buttons}>
        <Row>
          <Button text="CLEAR" onPress={() => alert("hola")} />
          <Button text="DEL" onPress={() => alert("hola")} />
        </Row>

        <Row>
          <Button text="7" onPress={() => alert("hola")} />
          <Button text="8" onPress={() => alert("hola")} />
          <Button text="9" onPress={() => alert("hola")} />
          <Button text="x" onPress={() => alert("hola")} />
        </Row>

        <Row>
          <Button text="4" onPress={() => alert("hola")} />
          <Button text="5" onPress={() => alert("hola")} />
          <Button text="6" onPress={() => alert("hola")} />
          <Button text="-" onPress={() => alert("hola")} />
        </Row>

        <Row>
          <Button text="1" onPress={() => alert("hola")} />
          <Button text="2" onPress={() => alert("hola")} />
          <Button text="3" onPress={() => alert("hola")} />
          <Button text="+" onPress={() => alert("hola")} />
        </Row>

        <Row>
          <Button text="0" onPress={() => alert("hola")} />
          <Button text="." onPress={() => alert("hola")} />
          <Button text="=" onPress={() => alert("hola")} />
        </Row>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 0.7,
    justifyContent: "flex-end",
    //backgroundColor: "red",
    alignItems: "center",
  },
  screen: {
    flex: 1.3,
    backgroundColor: "#FCF7E9",
    margin: 10,
    padding: 10,
    borderRadius: 20,
  },
  buttons: {
    flex: 3,
    padding: 10,
  },
});
