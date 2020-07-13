import React from "react";
import Portrait from "./images/joel_d.png"
import "./Page.css";

function Avatar () {

    return (
      <div>
          <img src={Portrait} alt="avatar"  className="avatar" />
      </div>
    );
};

export default Avatar;