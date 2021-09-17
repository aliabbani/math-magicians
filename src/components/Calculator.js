import React, { useState } from 'react';
import calculate from '../logic/calculate';
import Button from './Button';

function Calculator() {
  const [state, setState] = useState({
    total: 0,
    next: null,
    operation: null,
  });

  const clickButton = (e) => {
    setState((state) => calculate(state, e.target.innerHTML));
  };

  const buttonData = ['AC', '+/-', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];
  const oButton = ['÷', 'x', '-', '+', '='];
  return (
    <div className="calc-container">

      <div className="result">
        <div>{ state.total }</div>
        <div>{ state.operation }</div>
        <div>{ state.next }</div>
      </div>

      {buttonData.map((content) => {
        if (oButton.includes(content)) {
          return <Button key={Math.random()} content={content} onClick={clickButton} name={content} className="oButton" />;
        }
        if (content === '0') {
          return <Button key={Math.random()} content={content} onClick={clickButton} name={content} className="gButton zero" />;
        }
        return <Button key={Math.random()} content={content} onClick={clickButton} name={content} className="gButton" />;
      })}

      {/* <Button />
      <button type="button" name="AC" onClick={clickButton} className="gButton">AC</button>
      <button type="button" name="+/-" onClick={clickButton} className="gButton">+/-</button>
      <button type="button" name="%" onClick={clickButton} className="gButton">%</button>
      <button type="button" name="÷" onClick={clickButton} className="oButton">÷</button>
      <button type="button" name="7" onClick={clickButton} className="gButton">7</button>
      <button type="button" name="8" onClick={clickButton} className="gButton">8</button>
      <button type="button" name="9" onClick={clickButton} className="gButton">9</button>
      <button type="button" name="x" onClick={clickButton} className="oButton">x</button>
      <button type="button" name="4" onClick={clickButton} className="gButton">4</button>
      <button type="button" name="5" onClick={clickButton} className="gButton">5</button>
      <button type="button" name="6" onClick={clickButton} className="gButton">6</button>
      <button type="button" name="-" onClick={clickButton} className="oButton">-</button>
      <button type="button" name="1" onClick={clickButton} className="gButton">1</button>
      <button type="button" name="2" onClick={clickButton} className="gButton">2</button>
      <button type="button" name="3" onClick={clickButton} className="gButton">3</button>
      <button type="button" name="+" onClick={clickButton} className="oButton">+</button>
      <button type="button" name="0" onClick={clickButton} className="gButton zero">0</button>
      <button type="button" name="." onClick={clickButton} className="gButton">.</button>
      <button type="button" name="=" onClick={clickButton} className="oButton">=</button> */}
    </div>
  );
}

export default Calculator;
