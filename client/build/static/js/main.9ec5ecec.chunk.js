(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){},25:function(e,t,a){e.exports=a.p+"static/media/joel_d.47aa888e.png"},29:function(e,t,a){e.exports=a.p+"static/media/dayplanner.c23b8cef.png"},30:function(e,t,a){e.exports=a.p+"static/media/austin1.4ae173ba.jpeg"},31:function(e,t,a){e.exports=a.p+"static/media/burger.a4527cde.jpg"},32:function(e,t,a){e.exports=a.p+"static/media/knife.ab61e842.png"},33:function(e,t,a){e.exports=a(65)},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(24),o=a.n(r),c=(a(38),a(8)),m=a(6);a(39),a(40);function s(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"viewContainer"},l.a.createElement("h1",null,"Hello, my name is Joel Delatte, I am a..."),l.a.createElement("p",null,"Web Developer who brings the collaborative creativity of experience in musical performance, composition, and arrangement as well as the driven focus of a former chef to bear on web development and engineering pursuits. Highly skilled in collaboration through years of ensemble performance time on the kitchen line. Successfully completed a Certificate in Full Stack Web Development from UT Austin.",l.a.createElement("br",null),l.a.createElement("br",null),"My skillset spans Javascript-based technologies such as Node and Express back-end, with Reactjs or jQuery on the front-end as well as version control and code contribution with git and gitHub. Excited to contribute personal passion for creative problem solving and eagerness to approach diverse problems with new perspectives to present the world with relevant web-based technologies.")))}var i=a(25),u=a.n(i);a(14);var p=function(){return l.a.createElement("div",null,l.a.createElement("img",{src:u.a,alt:"avatar",className:"avatar"})," ")};var h=function(){return l.a.createElement("div",{className:"nav"},l.a.createElement(p,null),l.a.createElement(c.b,{to:"/bio"},"Bio"),l.a.createElement(c.b,{to:"/"},"Portfolio"),l.a.createElement(c.b,{to:"/contact"},"Contact"))},d=a(28),E=a.n(d);a(63);function g(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"contact"},l.a.createElement("h1",null,"Drop me a line:"),l.a.createElement("span",{className:"email-address"},"joeldelatte@gmail.com"),l.a.createElement("a",{href:"https://github.com/joeldelatte",target:"_blank"},"github.com/joeldelatte"),l.a.createElement("a",{href:"https://www.linkedin.com/in/joel-delatte-1b167250/",target:"_blank"},"linkedin.com/in/joel-delatte-1b167250/"),l.a.createElement("h2",null,"Send me a message:"),l.a.createElement("form",{id:"contact-form",onSubmit:function(e){e.preventDefault();var t=document.getElementById("name").value,a=document.getElementById("email").value,n=document.getElementById("message").value;E()({method:"POST",url:"https://joel-delatte-portfolio.herokuapp.com/send",data:{name:t,email:a,message:n}}).then(function(e){"success"===e.data.msg?(alert("Message Sent."),document.getElementById("contact-form").reset()):"fail"===e.data.msg&&alert("Message failed to send")})},className:"form",method:"POST"},l.a.createElement("label",{htmlFor:"fname"},"Name"),l.a.createElement("input",{type:"text",id:"name",name:"firstname",placeholder:"Your name.."}),l.a.createElement("label",{htmlFor:"email"},"Email"),l.a.createElement("input",{type:"text",id:"email",name:"email",placeholder:"Your email.."}),l.a.createElement("label",{htmlFor:"message"},"Message"),l.a.createElement("textarea",{type:"text",id:"message",placeholder:"Your message.."}),l.a.createElement("input",{type:"submit",value:"Submit"}))))}var b=a(29),f=a.n(b),v=a(30),j=a.n(v),y=a(31),w=a.n(y),k=a(32),N=a.n(k);a(64);function x(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"portfolio"},l.a.createElement("h1",null,"Here are some of my projects..."),l.a.createElement("div",{className:"projectBox"},l.a.createElement("a",{href:"https://rocky-meadow-16617.herokuapp.com/",target:"_blank"},l.a.createElement("img",{className:"projectPhoto",src:N.a}),l.a.createElement("section",{className:"projectLabel"},"Dinner Party")),l.a.createElement("p",null,"A supper-club planning app for avid home chefs. Post events for others to RSVP to, or RSVP to other home chef's parties. Full stack application usses MySql, Sequellize ORM, Express.js, React Node.",l.a.createElement("br",null),"See the github repository ",l.a.createElement("a",{href:"https://github.com/joeldelatte/Poject_3_Dinner_Party"},"here"),".")),l.a.createElement("div",{className:"projectBox"},l.a.createElement("a",{href:"https://mmoritz8.github.io/Project-1/Joel_art/arts.html",target:"_blank"},l.a.createElement("img",{className:"projectPhoto",src:j.a}),l.a.createElement("section",{className:"projectLabel"},"Austin Tribune")),l.a.createElement("p",null,"A local news site built in a team environment using jQuery, Node, Express.js server and REST APIs.",l.a.createElement("br",null),"See the github repository ",l.a.createElement("a",{href:"https://github.com/mmoritz8/Project-1"},"here"),".")),l.a.createElement("div",{className:"projectBox"},l.a.createElement("a",{href:"https://boiling-lowlands-78090.herokuapp.com/",target:"_blank"},l.a.createElement("img",{className:"projectPhoto",src:w.a}),l.a.createElement("section",{className:"projectLabel"},"Burger-Time")),l.a.createElement("p",null,"A burger logger made with MySQL, a custom ORM, Node, Express, and Handlebars.",l.a.createElement("br",null),"See the github repository ",l.a.createElement("a",{href:"https://github.com/joeldelatte/eat-da-burger"},"here"),".")),l.a.createElement("div",{className:"projectBox"},l.a.createElement("a",{href:"https://joeldelatte.github.io/day-planner/",target:"_blank"},l.a.createElement("img",{className:"projectPhoto",src:f.a}),l.a.createElement("section",{className:"projectLabel"},"Day Planner")),l.a.createElement("p",null,"Simple work-day planner application. Uses HTML, CSS, jQuery and the browser's local storage.",l.a.createElement("br",null),"See the github repository ",l.a.createElement("a",{href:"https://github.com/joeldelatte/day-planner"},"here"),"."))))}function S(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(c.a,null,l.a.createElement(h,null),l.a.createElement(m.c,null,l.a.createElement(m.a,{exact:!0,path:"/bio"},l.a.createElement(s,null)),l.a.createElement(m.a,{exact:!0,path:"/contact"},l.a.createElement(g,null)),l.a.createElement(m.a,{exact:!0,path:"/"},l.a.createElement(x,null)))))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()}).catch(function(e){console.error(e.message)})}},[[33,1,2]]]);
//# sourceMappingURL=main.9ec5ecec.chunk.js.map