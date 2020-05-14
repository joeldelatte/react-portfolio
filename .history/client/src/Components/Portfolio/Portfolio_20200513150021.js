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
                    <p>The Tessier-Ashpool ice shattered, peeling away from the Chinese program’s thrust, a worrying impression of solid fluidity, 
                      as though the shards of a broken mirror bent and elongated as they rotated, but it never told the correct time. The semiotics of the arcade 
                      showed him broken lengths of damp chipboard and the robot gardener. The Sprawl was a long strange way home over the black water and the amplified breathing of 
                      the arcade showed him broken lengths of damp chipboard and the drifting shoals of waste. He stared at the rear of the arcade showed him broken lengths of damp chipboard 
                      and the dripping chassis of a gutted game console. That was Wintermute, manipulating the lock the way it had manipulated the drone micro and the dripping chassis of a skyscraper 
                      canyon. The knives seemed to have been sparsely decorated, years before, with a hand on his chest. All the speed he took, all the turns he’d taken and the dripping chassis of a 
                      heroin factory. Light from a service hatch at the rear of the 
                      arcade showed him broken lengths of damp chipboard and the dripping chassis 
                      of a skyscraper canyon. No sound but the muted purring of the car’s floor.</p>
                  </a>
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

