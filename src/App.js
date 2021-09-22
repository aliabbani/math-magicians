import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Calculator from './components/Calculator';
import './App.css';
import Home from './pages/Home(About)';
import Quote from './pages/Quote';
import NotMatch from './pages/NotMatch';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = null;
  }

  render() {
    return (
      <>
        <Switch>
          <Route exact path="/">
            <div className="container">
              <Calculator />
            </div>
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/quote">
            <Quote />
          </Route>
          <Route path="*">
            <NotMatch />
          </Route>
        </Switch>
      </>
    );
  }
}

export default App;
