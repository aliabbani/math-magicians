import React from 'react';
// import './Calculator.css';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 0,
    };
  }

  render() {
    const { result } = this.state;
    return (
      <div className="calc-container">
        <h2 className="result">{ result }</h2>
        <button type="button" className="gButton">AC</button>
        <button type="button" className="gButton">+/-</button>
        <button type="button" className="gButton">%</button>
        <button type="button" className="oButton">/</button>
        <button type="button" className="gButton">7</button>
        <button type="button" className="gButton">8</button>
        <button type="button" className="gButton">9</button>
        <button type="button" className="oButton">*</button>
        <button type="button" className="gButton">4</button>
        <button type="button" className="gButton">5</button>
        <button type="button" className="gButton">6</button>
        <button type="button" className="oButton">-</button>
        <button type="button" className="gButton">1</button>
        <button type="button" className="gButton">2</button>
        <button type="button" className="gButton">3</button>
        <button type="button" className="oButton">+</button>
        <button type="button" className="gButton zero">0</button>
        <button type="button" className="gButton">.</button>
        <button type="button" className="oButton">=</button>
      </div>
    );
  }
}

export default Calculator;
