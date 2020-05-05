import React from "react";
import axios from "axios";
import "./style.css";

export default function Contact() {

    function handleSubmit(event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        axios({
            method: "POST",
            url: "http://localhost:3001/send",
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
        <>
          <form id="contact-form" onSubmit={handleSubmit} className="viewContainer" method="POST">
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


