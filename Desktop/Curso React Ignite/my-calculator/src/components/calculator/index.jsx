import "./style.css";
import { useState } from "react";

export const Calculator = () => {
  return (
    <div className="container">
      <div className="containerCalculator">
        <div className="screenCalculator">{0}</div>
        <div className="contentCalculator">
          <button className="darkGrey">C</button>
          <button className="darkGrey">+/-</button>
          <button className="darkGrey" value="%">%</button>
          <button className="orange" value="+">+/-</button>
          <button value={1}>1</button>
          <button value={2}>2</button>
          <button value={3}>3</button>
          <button className="orange" value="-">-</button>
          <button value={4}>4</button>
          <button value={5}>5</button>
          <button value={6}>6</button>
          <button className="orange" value="*">x</button>
          <button value={7}>7</button>
          <button value={8}>8</button>
          <button value={9}>9</button>
          <button className="orange" value="/">/</button>
          <button value={0}>0</button>
          <button className="darkGrey" style={{ visibility: "hidden" }}>
            del
          </button>
          <button value=".">,</button>
          <button className="orange">=</button>
        </div>
      </div>
    </div>
  );
};
