import "./style.css";
import { useState } from "react";

export const Calculator = () => {
  const [value, setValue] = useState(0);
  const [oldValue, setOldValue] = useState(0);
  const [changeValue, setChangeValue] = useState("");
  const [operator, setOperator] = useState("");

  const handleChangeValue = (e) => {
    setValue(value + e);
    if (value === 0) setValue(e);
  };

  const handleClear = () => {
    setValue(0);
  };

  const handleChangePositiveToNegative = () => {
    if (value > 0) setValue(-value);
    if (value < 0) setValue(Math.abs(value));
  };

  const handleChangePorcentage = () => {
    setValue(value / 100);
  };

  const handleChangeOperator = (e) => {
    setOperator(e);
    setOldValue(value);
    setValue(0);
  };

  const handleCalculate = () => {
    if (operator === "+") {
      setValue(+oldValue + +value);
    }
    if (operator === "-") {
      setValue(oldValue - value);
    }
    if (operator === "*") {
      setValue(oldValue * value);
    }
    if (operator === "/") {
      setValue(oldValue / value);
    }
  };

  const handleDelete = (e) => {
    setValue(value - 1);
  }

  return (
    <div className="container">
      <div className="containerCalculator">
        <div className="screenCalculator">
          {value.toString().replace(".", ",")}
        </div>
        <div className="contentCalculator">
          <button onClick={handleClear}>C</button>
          <button onClick={handleChangePositiveToNegative}>+/-</button>
          <button value="%" onClick={handleChangePorcentage}>
            %
          </button>
          <button
            className="orange"
            value="+"
            onClick={(e) => handleChangeOperator(e.target.value)}
          >
            +
          </button>
          <button
            className="darkGrey"
            value={1}
            onClick={(e) => handleChangeValue(e.target.value)}
          >
            1
          </button>
          <button
            className="darkGrey"
            value={2}
            onClick={(e) => handleChangeValue(e.target.value)}
          >
            2
          </button>
          <button
            className="darkGrey"
            value={3}
            onClick={(e) => handleChangeValue(e.target.value)}
          >
            3
          </button>
          <button
            className="orange"
            value="-"
            onClick={(e) => handleChangeOperator(e.target.value)}
          >
            -
          </button>
          <button
            className="darkGrey"
            value={4}
            onClick={(e) => handleChangeValue(e.target.value)}
          >
            4
          </button>
          <button
            className="darkGrey"
            value={5}
            onClick={(e) => handleChangeValue(e.target.value)}
          >
            5
          </button>
          <button
            className="darkGrey"
            value={6}
            onClick={(e) => handleChangeValue(e.target.value)}
          >
            6
          </button>
          <button
            className="orange"
            value="*"
            onClick={(e) => handleChangeOperator(e.target.value)}
          >
            x
          </button>
          <button
            className="darkGrey"
            value={7}
            onClick={(e) => handleChangeValue(e.target.value)}
          >
            7
          </button>
          <button
            className="darkGrey"
            value={8}
            onClick={(e) => handleChangeValue(e.target.value)}
          >
            8
          </button>
          <button
            className="darkGrey"
            value={9}
            onClick={(e) => handleChangeValue(e.target.value)}
          >
            9
          </button>
          <button
            className="orange"
            value="/"
            onClick={(e) => handleChangeOperator(e.target.value)}
          >
            /
          </button>
          <button
            className="darkGrey"
            value={0}
            onClick={(e) => handleChangeValue(e.target.value)}
          >
            0
          </button>
          <button className="darkGrey" style={{ visibility: "hidden" }}>
            del
          </button>
          <button
            className="darkGrey"
            value={"."}
            onClick={(e) => handleChangeValue(e.target.value)}
          >
            ,
          </button>
          <button onClick={handleCalculate}>=</button>
        </div>
      </div>
    </div>
  );
};
