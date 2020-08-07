import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import setPizzas from "./redux/actions/pizzas";

import { useDispatch } from "react-redux";
import { Header } from "./components";
import { Home, Card } from "./pages";
import { Route } from "react-router-dom";

function App(props) {
  const dispatch = useDispatch();
  

  useEffect(() => {
    axios.get("http://localhost:3000/pizzas").then(({ data }) => {
      dispatch(setPizzas(data));
    });
  });

  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="content">
          <Route path="/" component={Home} exact />
          <Route path="/card" component={Card} exact />
        </div>
      </div>
    </div>
  );
}

export default App;
