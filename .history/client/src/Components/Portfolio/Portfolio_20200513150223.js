import React, {useState} from "react";

import Dayplanner from "../Portfolio/images/dayplanner.png";
import NewsPaper from "../Portfolio/images/austin1.jpeg";
import Burger from "../Portfolio/images/burger.jpg"
import Knife from "../Portfolio/images/knife.png"

import './portfolio.css';

export default function Portfolio() {


    return (
        <>
        <div className="portfolio">
            <h1>Here are some of my projects...</h1>
                <div className="projectBox"  >
                  <a href="https://rocky-meadow-16617.herokuapp.com/" target="_blank">
                    <img className="projectPhoto" src={Knife}></img> 
                    <section className="projectLabel">Dinner Party</section>
                  </a>
                  <p>
                    Case felt the edge of the console in faded pinks and yellows. 
                    Case knew the thing for what it was a handgun and nine rounds of ammunition, and as he made his way down Shiga 
                    from the sushi stall he cradled it in his jacket pocket. They floated in the human system. The alarm still oscillated, 
                    louder here, the rear of the console in faded pinks and yellows. The Sprawl was a steady pulse of pain midway down his spine. 
                    It was chambered for .22 long rifle, and Case would’ve preferred lead azide explosives to the Tank War, mouth touched with hot 
                    gold as a gliding cursor struck sparks from the wall of a heroin factory. Case had never seen him wear the same suit twice
                  </p>
                </div>
                <div className="projectBox">
                  <a href="https://mmoritz8.github.io/Project-1/Joel_art/arts.html" target="_blank">
                    <img className="projectPhoto" src={NewsPaper}></img>
                    <section className="projectLabel">Austin Tribune</section>
                  </a>
                </div>
                <div className="projectBox">
                  <a href="https://boiling-lowlands-78090.herokuapp.com/" target="_blank">
                    <img className="projectPhoto" src={Burger}></img>
                    <section className="projectLabel">Burger-Time</section>
                  </a>
                </div>
                <div className="projectBox">
                  <a href="https://joeldelatte.github.io/day-planner/" target="_blank">
                    <img className="projectPhoto" src={Dayplanner}></img>
                    <section className="projectLabel">Day Planner</section>
                  </a>  
                </div>
        </div>
        </>
    )
}

