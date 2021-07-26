import React, { Component } from "react";
import "./App.css";
import Homepage from "./pages/homepage/homepage";
import { connect } from "react-redux";
import Header from "./components/header/header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Shoppage from "./pages/shoppage/shoppage";
import Auth from "./pages/auth/auth";
import { auth, createUser } from "./firebase/utils";
import { setCurrentUser } from "./redux/user/userActions";

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userRef = await createUser(user);

        userRef.onSnapshot((snapshot) => {
          this.props.setCurrentUser({
            currentUser: { id: snapshot.id, ...snapshot.data() },
          });
        });
      }

      this.props.setCurrentUser(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

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

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(App);
