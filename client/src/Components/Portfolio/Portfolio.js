import React, {useState} from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   useRouteMatch,
//   useParams
// } from "react-router-dom";
// import PortfolioItem from "./Items/PortfolioItem"
import Dayplanner from "../Portfolio/images/dayplanner.png";
import NewsPaper from "../Portfolio/images/austin1.jpeg";
import Burger from "../Portfolio/images/burger.jpg"
import Knife from "../Portfolio/images/knife.png"

import './style.css';

export default function Portfolio() {
    // const match = useRouteMatch();
    const [modal1, setModal1] = useState(false);

    return (
        <>
        <div className="viewContainer">
            <h1>Here are some of my projects...</h1>
                <div className="projectBox"  > {/* onMouseOver={()=> setModal1(true)} onMouseOverCapture ={setModal1(false)} */}
                  <a href="https://rocky-meadow-16617.herokuapp.com/">
                    <img class="projectPhoto" src={Knife}></img> 
                    <section className="projectLabel">Dinner Party</section>
                  </a>
                  {/* {(modal1 && <p>Dinner Party is an event planning app where users can create invitations and rsvp to others parties.</p> )}           */}
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

            // <div className="portfolioNav">
            //     <Link to={`${match.url}/dayplanner`} >Day Planner</Link>
            //     <Link to={`${match.url}/dinnerparty`} >Dinner Party</Link>
            //     <Link to={`${match.url}/austintribune`} >Austin Tribune</Link>
            // </div>