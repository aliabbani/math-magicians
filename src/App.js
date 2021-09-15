import React from 'react';
import Calculator from './components/Calculator';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = null;
  }

  render() {
    return (
      <div className="container">
        <Calculator />
      </div>
    );
  }
}

export default App;
