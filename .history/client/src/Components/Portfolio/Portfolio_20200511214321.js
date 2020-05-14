import React, {useState} from "react";

import Dayplanner from "../Portfolio/images/dayplanner.png";
import NewsPaper from "../Portfolio/images/austin1.jpeg";
import Burger from "../Portfolio/images/burger.jpg"
import Knife from "../Portfolio/images/knife.png"

import './portfolio.css';

export default function Portfolio() {


    return (
        <>
        <div className="viewContainer">
            <h1>Here are some of my projects...</h1>
                <div className="projectBox"  >
                  <a href="https://rocky-meadow-16617.herokuapp.com/">
                    <img className="projectPhoto" src={Knife}></img> 
                    <section className="projectLabel">Dinner Party</section>
                  </a>
                </div>
                <div className="projectBox">
                  <a href="https://mmoritz8.github.io/Project-1/Joel_art/arts.html">
                    <img className="projectPhoto" src={NewsPaper}></img>
                    <section className="projectLabel">Austin Tribune</section>
                  </a>
                </div>
                <div className="projectBox">
                  <a href="https://boiling-lowlands-78090.herokuapp.com/">
                    <img className="projectPhoto" src={Burger}></img>
                    <section className="projectLabel">Burger-Time</section>
                  </a>
                </div>
                <div className="projectBox">
                  <a href="https://joeldelatte.github.io/day-planner/">
                    <img className="projectPhoto" src={Dayplanner}></img>
                    <section className="projectLabel">Day Planner</section>
                  </a>  
                </div>
        </div>
        </>
    )
}

