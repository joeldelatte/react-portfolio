import React from "react";
import axios from "axios";
import "./contact.css";

export default function Contact() {

    function handleSubmit(event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        axios({
            method: "POST",
            url: "http://localhost:3001/send", //https://joel-delatte-portfolio.herokuapp.com/send
            data: {
                name: name,
                email: email,
                message: message
            }
        }).then((res)=>{
            if(res.data.msg === 'success') {
                alert("Message Sent.");
                resetForm();
            }else if (res.data.msg === 'fail') {
                alert("Message failed to send");
            }
        })
    }

    function resetForm() {
        document.getElementById("contact-form").reset();
    }

    return (
      <div className="conatiner">
        <div className="contact">
          <h1>Send me a message:</h1>
          <form
            id="contact-form"
            onSubmit={handleSubmit}
            className="form"
            method="POST"
          >
            <label htmlFor="fname">Name</label>
            <input
              type="text"
              id="name"
              name="firstname"
              placeholder="Your name.."
            />
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Your email.."
            />
            <label htmlFor="message">Message</label>
            <textarea type="text" id="message" placeholder="Your message.." />
            <input type="submit" value="Submit"></input>
          </form>
          <h2>Drop me a line:</h2>
          <span className="email-address">joeldelatte@gmail.com</span>
          <a
            href="https://github.com/joeldelatte"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/joeldelatte
          </a>
          <a
            href="https://www.linkedin.com/in/joel-delatte-1b167250/"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/joel-delatte-1b167250/
          </a>
        </div>
        <footer>Hello</footer>
      </div>
    );
}


