import React, { Component } from "react";
import "./App.css";
import Homepage from "./pages/homepage/homepage";
import Header from "./components/header/header";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Shoppage from "./pages/shoppage/shoppage";

class App extends Component {
  render() {
    return(
      <Router>
      <Header />
        <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path='/shop' component={Shoppage} />
        </Switch>
      </Router>
    )
  }
}

export default App;
