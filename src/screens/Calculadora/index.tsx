import React from "react";

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
  return (
    <Calculadora>
      <Header>
        <Marca>gsusmab</Marca>
      </Header>

      <Pantalla>
        <Cantidad>50</Cantidad>
      </Pantalla>

      <Botones>
        <Row>
          <Button
            text="CLEAR"
            highlighText="white"
            size="double"
            onPress={() => alert("hola")}
          />
          <Button
            text="DEL"
            highlighText="white"
            size="double"
            onPress={() => alert("hola")}
          />
        </Row>

        <Row>
          <Button text="7" onPress={() => alert("hola")} />
          <Button text="8" onPress={() => alert("hola")} />
          <Button text="9" onPress={() => alert("hola")} />
          <Button
            text="x"
            highlighText="yellow"
            onPress={() => alert("hola")}
          />
        </Row>

        <Row>
          <Button text="4" onPress={() => alert("hola")} />
          <Button text="5" onPress={() => alert("hola")} />
          <Button text="6" onPress={() => alert("hola")} />
          <Button
            text="-"
            highlighText="yellow"
            onPress={() => alert("hola")}
          />
        </Row>

        <Row>
          <Button text="1" onPress={() => alert("hola")} />
          <Button text="2" onPress={() => alert("hola")} />
          <Button text="3" onPress={() => alert("hola")} />
          <Button
            text="+"
            highlighText="yellow"
            onPress={() => alert("hola")}
          />
        </Row>

        <Row>
          <Button text="0" onPress={() => alert("hola")} />
          <Button text="." onPress={() => alert("hola")} />
          <Button
            primary
            text="="
            size="double"
            onPress={() => alert("hola")}
          />
        </Row>
      </Botones>
    </Calculadora>
  );
};
