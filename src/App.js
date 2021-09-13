import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React, { Component } from 'react';

export class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar title="News Feed" />
          {/* <News country='in' category='health'/> */}
          <Switch>
            <Route exact path="/"> <News key="general" country='in' category='general' /></Route>
            <Route exact path="/business"><News key="business" country='in' category='business' /></Route>
            <Route exact path="/entertainment"><News country='in' key="entertainment"  category='entertainment' /></Route>
            <Route exact path="/general"> <News country='in' key="general" category='general' /></Route>
            <Route exact path="/health"> <News country='in' key="health" category='health' /></Route>
            <Route exact path="/science"> <News country='in' key="science"  category='science' /></Route>
            <Route exact path="/sports"> <News country='in' key="sports" category='sports' /></Route>
            <Route exact path="/technology"> <News country='in' key="technology" category='technology' /></Route>
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App
