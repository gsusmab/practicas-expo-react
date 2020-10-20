import React from "react";
import { Text } from "react-native";

import { useCalculator } from "../../hooks/useCalculator";
import { Button } from "../../components/Buttton";
import { Row } from "../../components/Row";
import {
  Botones,
  Calculadora,
  Cantidad,
  Header,
  Marca,
  Pantalla,
} from "./styles";

export const Practica2 = () => {
  const {
    currentValue,
    previousValue,
    operator,
    handleTap,
    handleMutation,
  } = useCalculator();

  return (
    <Calculadora>
      <Header>
        <Marca>gsusmab</Marca>
      </Header>

      <Pantalla>
        {previousValue !== "0" && (
          <Text>{`${previousValue} ${operator} `}</Text>
        )}
        <Cantidad>{currentValue}</Cantidad>
      </Pantalla>

      <Botones>
        <Row>
          <Button
            text="CLEAR"
            highlighText="white"
            onPress={() => handleMutation("clear")}
          />
          <Button
            text="DEL"
            highlighText="white"
            onPress={() => handleMutation("del")}
          />
          <Button
            text="%"
            highlighText="yellow"
            onPress={() => handleMutation("%")}
          />
          <Button
            text="/"
            highlighText="yellow"
            onPress={() => handleTap("operator", "/")}
          />
        </Row>

        <Row>
          <Button text="7" onPress={() => handleTap("number", "7")} />
          <Button text="8" onPress={() => handleTap("number", "8")} />
          <Button text="9" onPress={() => handleTap("number", "9")} />
          <Button
            text="x"
            highlighText="yellow"
            onPress={() => handleTap("operator", "*")}
          />
        </Row>

        <Row>
          <Button text="4" onPress={() => handleTap("number", "4")} />
          <Button text="5" onPress={() => handleTap("number", "5")} />
          <Button text="6" onPress={() => handleTap("number", "6")} />
          <Button
            text="-"
            highlighText="yellow"
            onPress={() => handleTap("operator", "-")}
          />
        </Row>

        <Row>
          <Button text="1" onPress={() => handleTap("number", "1")} />
          <Button text="2" onPress={() => handleTap("number", "2")} />
          <Button text="3" onPress={() => handleTap("number", "3")} />
          <Button
            text="+"
            highlighText="yellow"
            onPress={() => handleTap("operator", "+")}
          />
        </Row>

        <Row>
          <Button text="0" onPress={() => handleTap("number", "0")} />
          <Button text="." onPress={() => handleTap("float", ".")} />
          <Button
            primary
            text="="
            size="double"
            onPress={() => handleMutation("equal")}
          />
        </Row>
      </Botones>
    </Calculadora>
  );
};
