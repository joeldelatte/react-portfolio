import React from "react";

import Dayplanner from "../Portfolio/images/dayplanner.png";
import NewsPaper from "../Portfolio/images/austin1.jpeg";
import Burger from "../Portfolio/images/burger.jpg"
import Knife from "../Portfolio/images/knife.png"

import './portfolio.css';

export default function Portfolio() {


    return (
      <>
        <div className="portfolio">
          {/* <h1>Here are some of my projects...</h1>
          <div className="projectBox">
            <a
              href="https://rocky-meadow-16617.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="projectPhoto" src={Knife}></img>
              <section className="projectLabel">Dinner Party</section>
            </a>
            <p>
              A party planner for home chefs. Post invitations or RSVP to
              parties. Uses MySql, Sequellize ORM, Express.js, React Node.
              <br></br>
              See the github repository{" "}
              <a href="https://github.com/joeldelatte/Poject_3_Dinner_Party">
                here
              </a>
              .
            </p>
          </div>
          <div className="projectBox">
            <a
              href="https://mmoritz8.github.io/Project-1/Joel_art/arts.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="projectPhoto" src={NewsPaper}></img>
              <section className="projectLabel">Austin Tribune</section>
            </a>
            <p>
              A local news site built in a team environment using jQuery, Node,
              Express.js server and REST APIs.
              <br></br>
              See the github repository{" "}
              <a href="https://github.com/mmoritz8/Project-1">here</a>.
            </p>
          </div>
          <div className="projectBox">
            <a
              href="https://boiling-lowlands-78090.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="projectPhoto" src={Burger}></img>
              <section className="projectLabel">Burger-Time</section>
            </a>
            <p>
              A burger logger made with MySQL, a custom ORM, Node, Express, and
              Handlebars.
              <br></br>
              See the github repository{" "}
              <a href="https://github.com/joeldelatte/eat-da-burger">here</a>.
            </p>
          </div>
          <div className="projectBox">
            <a
              href="https://joeldelatte.github.io/day-planner/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="projectPhoto" src={Dayplanner}></img>
              <section className="projectLabel">Day Planner</section>
            </a>
            <p>
              Simple work-day planner application. Uses HTML, CSS, jQuery and
              the browser's local storage.
              <br></br>
              See the github repository{" "}
              <a href="https://github.com/joeldelatte/day-planner">here</a>.
            </p>
          </div> */}
          <div class="card">
            <div class="card__side card__side--front">
              <div class="card__picture card__picture--1">&nbsp;</div>
              <h4 class="card__heading">
                <span class="card__heading-span card__heading-span--1">
                  The Sea Explorer
                </span>
              </h4>
              <div class="card__details">
                <ul>
                  <li>3 day tour</li>
                  <li>Up to 30 people</li>
                  <li>2 tour guides</li>
                  <li>Sleep in cozy hotels</li>
                  <li>Easy tour</li>
                </ul>
              </div>
            </div>
            <div class="card__side card__side--back card__side--back-1">
              <div class="card__cta">
                <div class="card__price-box">
                  <p class="card__price-only">Only</p>
                  <p class="card__price-value">$297</p>
                </div>
                <a href="#" class="btn btn--white">
                  Book now!
                </a>
              </div>
            </div>
          </div>
        </div>
        <footer>Hello</footer>
      </>
    );
}

