import React, { Component } from "react";
import "./App.css";
import Homepage from "./pages/homepage/homepage";
import Header from "./components/header/header";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Shoppage from "./pages/shoppage/shoppage";
import Auth from "./pages/auth/auth"

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/shop" component={Shoppage} />
          <Route exact path="/signin" component={Auth} />
        </Switch>
      </Router>
    );
  }
}

export default App;
