import "./style.css";
import { useState } from "react";

export const Calculator = () => {
  return (
    <div className="container">
      <div className="containerCalculator">
        <div className="screenCalculator">{0}</div>
        <div className="contentCalculator">
          <button>C</button>
          <button>+/-</button>
          <button>%</button>
          <button>
            +
          </button>
          <button>
            1
          </button>
          <button>
            2
          </button>
          <button>
            3
          </button>
          <button>
            -
          </button>
          <button>
            4
          </button>
          <button>
            5
          </button>
          <button>
            6
          </button>
          <button>
            x
          </button>
          <button>
            7
          </button>
          <button>
            8
          </button>
          <button>
            9
          </button>
          <button>
            /
          </button>
          <button>
            0
          </button>
          <button className="darkGrey" style={{ visibility: "hidden" }}>
            del
          </button>
          <button>
            ,
          </button>
          <button>=</button>
        </div>
      </div>
    </div>
  );
};
