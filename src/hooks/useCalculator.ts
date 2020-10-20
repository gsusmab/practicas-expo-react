import { useState } from "react";

export const useCalculator = () => {
  const [currentValue, setCurrentValue] = useState("0");
  const [operator, setOperator] = useState("0");
  const [previousValue, setPreviousValue] = useState("0");
  const [equalsPressed, setEqualsPressed] = useState(false);

  const handleTap = (
    type: "number" | "float" | "operator",
    value:
      | "0"
      | "1"
      | "2"
      | "3"
      | "4"
      | "5"
      | "6"
      | "7"
      | "8"
      | "9"
      | "+"
      | "-"
      | "/"
      | "*"
      | "%"
      | "."
  ) => {
    switch (type) {
      case "number": {
        if (currentValue === "0") {
          setCurrentValue(value);
          break;
        } else if (currentValue !== "0" && equalsPressed) {
          setEqualsPressed(false);
          setCurrentValue(value);
          break;
        } else {
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

  const handleMutation = (mutation: "del" | "clear" | "%" | "equal") => {
    switch (mutation) {
      case "del": {
        if (!equalsPressed && currentValue !== "0") {
          setCurrentValue(currentValue.slice(0, -1));
          break;
        }
        break;
      }

      case "clear": {
        setEqualsPressed(false);
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

  return {
    currentValue,
    operator,
    previousValue,
    equalsPressed,
    handleTap,
    handleMutation,
  };
};
