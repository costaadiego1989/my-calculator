import "./style.css";
import { useState } from "react";

export const Calculator = () => {
  const [primaryValue, setPrimaryValue] = useState(0);

  const handleChangeValue = (e) => {
    console.log(e);
  }

  return (
    <div className="container">
      <div className="containerCalculator">
        <div className="screenCalculator">{0}</div>
        <div className="contentCalculator">
          <button className="darkGrey">C</button>
          <button className="darkGrey">+/-</button>
          <button className="darkGrey" value="%">%</button>
          <button className="orange" value="+">+/-</button>
          <button value={1} onClick={e => handleChangeValue(e.target.value)}>1</button>
          <button value={2} onClick={e => handleChangeValue(e.target.value)}>2</button>
          <button value={3} onClick={e => handleChangeValue(e.target.value)}>3</button>
          <button className="orange" value="-">-</button>
          <button value={4} onClick={e => handleChangeValue(e.target.value)}>4</button>
          <button value={5} onClick={e => handleChangeValue(e.target.value)}>5</button>
          <button value={6} onClick={e => handleChangeValue(e.target.value)}>6</button>
          <button className="orange" value="*">x</button>
          <button value={7} onClick={e => handleChangeValue(e.target.value)}>7</button>
          <button value={8} onClick={e => handleChangeValue(e.target.value)}>8</button>
          <button value={9} onClick={e => handleChangeValue(e.target.value)}>9</button>
          <button className="orange" value="/">/</button>
          <button value={0} onClick={e => handleChangeValue(e.target.value)}>0</button>
          <button className="darkGrey" style={{ visibility: "hidden" }}>
            del
          </button>
          <button value="." onClick={e => handleChangeValue(e.target.value)}>,</button>
          <button className="orange">=</button>
        </div>
      </div>
    </div>
  );
};
