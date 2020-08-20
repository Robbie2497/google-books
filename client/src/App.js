import React, { Component } from "react";
import Header from "./Components/Header";
import Books from "./Components/Books";
import Favorites from "./Components/Favorites";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router >
        <div className="App">
          <Switch>
            <Route exact path='/' render={props =>
              <div>
                <Header />
                <Books />
              </div>
            }
            />
            <Route exact path="/favorites" component={Favorites} />
          </Switch>
        </div>
      </Router >

    );
  }
}

export default App;
