import React from 'react';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };

    this.clickButton = this.clickButton.bind(this);
  }

  clickButton(e) {
    this.setState((state) => calculate(state, e.target.innerHTML));
  }

  render() {
    const { total, operation, next } = this.state;
    return (
      <div className="calc-container">
        <div className="result">
          <div>{ total }</div>
          <div>{ operation }</div>
          <div>{ next }</div>
        </div>
        <button type="button" name="AC" onClick={this.clickButton} className="gButton">AC</button>
        <button type="button" name="+/-" onClick={this.clickButton} className="gButton">+/-</button>
        <button type="button" name="%" onClick={this.clickButton} className="gButton">%</button>
        <button type="button" name="÷" onClick={this.clickButton} className="oButton">÷</button>
        <button type="button" name="7" onClick={this.clickButton} className="gButton">7</button>
        <button type="button" name="8" onClick={this.clickButton} className="gButton">8</button>
        <button type="button" name="9" onClick={this.clickButton} className="gButton">9</button>
        <button type="button" name="x" onClick={this.clickButton} className="oButton">x</button>
        <button type="button" name="4" onClick={this.clickButton} className="gButton">4</button>
        <button type="button" name="5" onClick={this.clickButton} className="gButton">5</button>
        <button type="button" name="6" onClick={this.clickButton} className="gButton">6</button>
        <button type="button" name="-" onClick={this.clickButton} className="oButton">-</button>
        <button type="button" name="1" onClick={this.clickButton} className="gButton">1</button>
        <button type="button" name="2" onClick={this.clickButton} className="gButton">2</button>
        <button type="button" name="3" onClick={this.clickButton} className="gButton">3</button>
        <button type="button" name="+" onClick={this.clickButton} className="oButton">+</button>
        <button type="button" name="0" onClick={this.clickButton} className="gButton zero">0</button>
        <button type="button" name="." onClick={this.clickButton} className="gButton">.</button>
        <button type="button" name="=" onClick={this.clickButton} className="oButton">=</button>
      </div>
    );
  }
}

export default Calculator;
