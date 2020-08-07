import React from "react";
import logo from "../assets/img/pizza-logo.svg";
import { Button } from "./index";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="header">
        <div className="container">
          <Link to="/">
            <div className="header__logo">
              <img width="38" src={logo} alt="Pizza logo" />
              <div>
                <h1>React Pizza</h1>
                <p>самая вкусная пицца во вселенной</p>
              </div>
            </div>
          </Link>
          <Link to="/card">
            <Button />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
