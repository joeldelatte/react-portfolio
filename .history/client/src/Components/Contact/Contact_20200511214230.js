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
        <div className="viewContainer">
          <h1>Check me out yo</h1>
          <form id="contact-form" onSubmit={handleSubmit} method="POST">
              <label htmlFor="fname">Name</label>
              <input type="text" id="name" name="firstname" placeholder="Your name.." />
              <label htmlFor="email">Email</label>
              <input type="text" id="email" name="email" placeholder="Your email.." />
              <label htmlFor="message">Message</label>
              <textarea type="text" id="message" placeholder="Your message.." />
              <input type="submit" value="Submit"></input>
          </form>
        </div>
        </>
    )
}


