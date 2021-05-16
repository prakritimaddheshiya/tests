import React from "react";
import "font-awesome/css/font-awesome.min.css";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Test from "./components/Test";
import PageNotFound404 from "./components/PageNotFound404";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/test/:id' component={Test} />
        <Route path='*' component={PageNotFound404} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
