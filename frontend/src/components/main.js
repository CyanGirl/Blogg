import React from "react";

import Posts from "./postList";
import Nav from "./nav";
import "./main.css";

const Main = () => {
  return (
    <div>
      <div className="head absolute">
        <h2>Blogg</h2>
      </div>

      <div className="main">
        <Nav />
      </div>
      <div className="back">
        <br />
        <h4 className="listHead">....stories....</h4>
        <Posts />
        <br />
        <br />
      </div>
    </div>
  );
};

export default Main;
