import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "./../context/cartContext";
import { useLocation } from "react-router-dom";

import { AiOutlineShoppingCart } from "react-icons/ai";
import "../styles/nav.css";

//https://androidexample365.com/android-shopping-app-built-with-mvvm-clean-architecture-consuming-fake-store-api/

function Navbar() {
  const { auth, cart } = useContext(ThemeContext);
  let currentUrl = window.location.pathname;
  console.log("nav : " + useLocation().pathname);

  const selectedNav = useLocation().pathname;

  const styleSelect = (name) => {
    switch (name) {
      case "/Contact":
        if (selectedNav == name) {
          return { color: "white", backgroundColor: "green" };
        } else {
          return { color: "green" };
        }
        break;
      case "/signin":
        if (selectedNav == name) {
          return { color: "white", backgroundColor: "green" };
        } else {
          return { color: "green" };
        }
        break;
      case "/Panier" : 
        if (selectedNav == name) {
          return { color: "white", backgroundColor: "green" };
        } else {
          return { color: "green" };
        }
      break;
    }
  };

  return (
    <div className="navbar">
      <div className="left-nav">
        <NavLink key="actual-nav" to="/">
          {" "}
          <img
            className="nav-logo"
            src={require("../resources/logo.png")}
          />{" "}
        </NavLink>
      </div>
      <div className="right-nav">
        <NavLink
          key="contact-nav"
          className={'nav-text'}
          style={() => styleSelect("/Contact")}
          to="/Contact"
        >
          Contact
        </NavLink>
        <NavLink key="cart-nav" to="/Panier" className={'nav-text'} style={() => styleSelect("/Panier")} >
          <div className="cart-holder">
            <AiOutlineShoppingCart size={30} />
            <div className="cart-notif">{cart.length}</div>
          </div>
        </NavLink>
        <NavLink
          key="signin-nav"
          className={'nav-text'}
          style={() => styleSelect("/signin")}
          to={
            "/signin" +
            "?" +
            new URLSearchParams({ url: currentUrl }).toString()
          }
        >
          {auth ? "sign Out" : "Sign In"}
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
