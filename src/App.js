
import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import { Switch, Route } from "react-router-dom";
import './App.css';
import About from "./compoment/pages/About";
import Contact from "./compoment/pages/contact";
import Home from "./compoment/pages/Home";
import Header from "./compoment/Header/header"


import Service from "./compoment/pages/Service";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/service" component={Service} />
        <Route exact path="/Contact" component={Contact} />
     
      </Switch>
    </div>
  );
}

export default App;
