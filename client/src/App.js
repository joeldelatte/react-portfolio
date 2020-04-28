import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import './App.css';
import Bio from "./Components/Bio/Bio";
import Nav from "./Page/Nav";
import Contact from "./Components/Contact/Contact"
import Portfolio from "./Components/Portfolio/Portfolio"

export default function App() {
  return (
    <>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/bio">
            <Bio />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/">
            <Portfolio />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

