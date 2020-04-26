import React from "react";
import "./style.css";

export default function Contact() {
    return (
        <>
          <form className="viewContainer">
          <h1>Want to get in touch, drop me a line.</h1>
              <label htmlFor="fname">Name</label>
              <input type="text" id="fname" name="firstname" placeholder="Your name.." />
              <label htmlFor="email">Email</label>
              <input type="text" id="email" name="email" placeholder="Your email.." />
              <label htmlFor="message">Message</label>
              <textarea type="text" id="message" placeholder="Your message.." />
              <input type="submit" value="Submit"></input>
          </form>
        </>
    )
}


