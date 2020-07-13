import React from "react";
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import Avatar from "./Avatar";
import "./Page.css";

function Nav () {
    return (
      <div className="header">
        <Avatar />
        <div className="nav">
          <Link to="/">Bio |</Link>
          <Link to="/portfolio">Portfolio |</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    );
};

export default Nav;