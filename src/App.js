import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Calculator from './components/Calculator';
import './App.css';
import Home from './pages/Home(About)';
import Quote from './pages/Quote';
import NotMatch from './pages/NotMatch';
import Navbar from './components/Navbar';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = null;
  }

  render() {
    return (
      <>
        <Navbar className="fixed-nav" />
        <Switch>
          <Route exact path="/calculator">
            <div className="container">
              <Calculator />
            </div>
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/quote">
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
