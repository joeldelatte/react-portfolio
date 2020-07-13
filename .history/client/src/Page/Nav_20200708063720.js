import React from "react";
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import Avatar from "./Avatar";
import "./Page.css";

function Nav () {
    return (
        <div className="header">
            <div className="nav">
                <Avatar />
                <Link className="header_text-box" to="/bio" >Bio</Link>
                <Link to="/">Portfolio</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </div>
    )
};

export default Nav;