import React, { Component } from "react";
import "./App.css";
import Homepage from "./pages/homepage/homepage";
import Header from "./components/header/header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Shoppage from "./pages/shoppage/shoppage";
import Auth from "./pages/auth/auth";
import { auth, createUser } from "./firebase/utils";

class App extends Component {
  constructor() {
    super();

    this.state = {
      user: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userRef = await createUser(user);

        userRef.onSnapshot((snapshot) => {
          this.setState({
            currentUser: { id: snapshot.id, ...snapshot.data() },
          });
        });
      }

      this.setState({ currentUser: user });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <Router>
        <Header user={this.state.user} />
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
