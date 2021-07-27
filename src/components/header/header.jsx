import React from "react";
import "./header.scss";
import { auth } from "../../firebase/utils";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import CartIcon from "../cartIcon/cartIcon";
import CartDropDown from "../cartDropdown/cartDropdown";

const Header = ({ currentUser }) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to={"/shop"}>
          SHOP
        </Link>
        <Link className="option" to={"/cart"}>
          CART
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to={"/signin"}>
            SIGN IN
          </Link>
        )}

        <Link className="option" to={"/contact"}>
          CONTACT
        </Link>
        <CartIcon />
      </div>
      <CartDropDown />
    </div>
  );
};

const mapStateToProps = (state) => {
  return state.user.currentUser;
};
export default connect(mapStateToProps)(Header);
