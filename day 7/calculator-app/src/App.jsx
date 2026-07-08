import React, { useState } from "react";
import "./App.css";

function App() {
  const [display, setDisplay] = useState("0");

  const handleClick = (value) => {
    if (display === "0") {
      setDisplay(value);
    } else {
      setDisplay(display + value);
    }
  };

  const clearDisplay = () => {
    setDisplay("0");
  };

  const deleteLast = () => {
    if (display.length === 1) {
      setDisplay("0");
    } else {
      setDisplay(display.slice(0, -1));
    }
  };

  const calculate = () => {
    try {
      setDisplay(eval(display).toString());
    } catch {
      setDisplay("Error");
    }
  };

  return (
    <div className="container">
      <div className="calculator">

        <input
          type="text"
          className="display"
          value={display}
          readOnly
        />

        <div className="buttons">

          <button className="clear" onClick={clearDisplay}>C</button>
          <button className="operator" onClick={() => handleClick("%")}>%</button>
          <button className="operator" onClick={deleteLast}>⌫</button>
          <button className="operator" onClick={() => handleClick("/")}>÷</button>

          <button className="number" onClick={() => handleClick("7")}>7</button>
          <button className="number" onClick={() => handleClick("8")}>8</button>
          <button className="number" onClick={() => handleClick("9")}>9</button>
          <button className="operator" onClick={() => handleClick("*")}>×</button>

          <button className="number" onClick={() => handleClick("4")}>4</button>
          <button className="number" onClick={() => handleClick("5")}>5</button>
          <button className="number" onClick={() => handleClick("6")}>6</button>
          <button className="operator" onClick={() => handleClick("-")}>-</button>

          <button className="number" onClick={() => handleClick("1")}>1</button>
          <button className="number" onClick={() => handleClick("2")}>2</button>
          <button className="number" onClick={() => handleClick("3")}>3</button>
          <button className="operator" onClick={() => handleClick("+")}>+</button>

          <button className="number zero" onClick={() => handleClick("0")}>0</button>
          <button className="number" onClick={() => handleClick(".")}>.</button>
          <button className="equal" onClick={calculate}>=</button>

        </div>
      </div>
    </div>
  );
}

export default App;