import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./component/Home";
import Header from "./component/Header";
import Completed from "./component/Completed";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" render={(props) => <Home {...props} />} />
          <Route
            exact
            path="/completed"
            render={(props) => <Completed {...props} />}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
