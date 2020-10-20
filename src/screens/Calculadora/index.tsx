import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";

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
  const [currentValue, setCurrentValue] = useState("0");
  const [operator, setOperator] = useState("0");
  const [previousValue, setPreviousValue] = useState("0");
  const [equalsPressed, setEqualsPressed] = useState(false);

  const handleTap = (type: string, value: string) => {
    switch (type) {
      case "number": {
        if (currentValue === "0") {
          setCurrentValue(value);
          break;
        } else {
          setEqualsPressed(false);
          setCurrentValue((crrValue) => crrValue + value);
          break;
        }
      }

      case "float": {
        const isFloat = currentValue.indexOf(".") > 0;

        if (!isFloat) {
          setEqualsPressed(false);
          setCurrentValue((crrValue) => crrValue + value);
          break;
        }

        break;
      }

      case "operator": {
        setOperator(value);
        setPreviousValue(currentValue);
        setCurrentValue("0");
        break;
      }
    }
  };

  const handleMutation = (mutation: string) => {
    switch (mutation) {
      case "del": {
        if (!equalsPressed) {
          setCurrentValue(currentValue.slice(0, -1));
          break;
        }
        break;
      }

      case "clear": {
        setCurrentValue("0");
        setPreviousValue("0");
        setOperator("");
        break;
      }

      case "%": {
        const current = parseFloat(currentValue);
        const result = current * 0.01;
        setCurrentValue(result.toString());
        break;
      }

      case "equal": {
        setEqualsPressed(true);
        const current = parseFloat(currentValue);
        const previous = parseFloat(previousValue);
        let result: string = "0";

        switch (operator) {
          case "+": {
            result = (current + previous).toString();
            setPreviousValue("0");
            setCurrentValue(result);
            break;
          }

          case "-": {
            result = (previous - current).toString();
            setPreviousValue("0");
            setCurrentValue(result);
            break;
          }

          case "*": {
            result = (current * previous).toString();
            setPreviousValue("0");
            setCurrentValue(result);
            break;
          }

          case "/": {
            result = (previous / current).toString();
            setPreviousValue("0");
            setCurrentValue(result);
            break;
          }
        }
      }
    }
  };

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
