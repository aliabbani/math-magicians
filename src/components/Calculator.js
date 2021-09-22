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
    </div>
  );
}

export default Calculator;
