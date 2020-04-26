import React from "react";
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import Avatar from "./Avatar";
import "./Page.css";

function Nav () {
    return (
        <div className="sideNav">
            <Avatar />
            <Link role="button" to="/bio" >Bio</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/contact">Contact</Link>
        </div>
    )
};

export default Nav;