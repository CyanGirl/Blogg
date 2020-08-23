import React from "react";
import "./contact.css";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="middle contact">
      <Link to="/">
        <i className="fas fa-home"></i>
      </Link>
      <div>
        <div className="head absolute">
          <h2>Blogg</h2>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="fixedback">
        <h3 id="contactHead">Know Us!</h3>
        <br />
        <div id="contactCon">
          <br />
          <p id="first">
            This world is so huge. Isn't It? Every second somewhere something or
            other is happening. Interesting in way of Different Perception.
          </p>
          <p id="second">
            So do you have something which you want to share to the world? A
            story? Or an Idea? Or an experience worth sharing?
          </p>
          <p id="third">
            Tell us. You have our ears. Make your story heard.
            <br /> No need to login. No need to register. <br /> Straightaway
            write your mind out on the go.
          </p>
          <p id="fourth">
            This is your Space. Make it better with your interesting stories.
          </p>
          <br />
        </div>
      </div>
      <br />
      <p id="footer">
        Note: The Admin can delete or modify the content if found inappropriate
        or not fit for this site.
        <br />
        You can reach the Admin{" "}
        <a href="#">
          <u>Here!</u>
        </a>
      </p>
    </div>
  );
};

export default Contact;
