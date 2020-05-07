import React from "react";
import Portrait from "./images/joel_d.png"
import "./Page.css";

const styles = {
    maxWidth: 200,
    maxHeight: 200,
    borderRadius: 100,
    marginLeft: 25
};

function Avatar () {

    return (
      <div>
          <img src={Portrait} alt="avatar" style={styles} className/>
      </div>
    );
};

export default Avatar;