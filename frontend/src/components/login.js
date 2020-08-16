import React from "react";
import "./login.css";
import { Link, useHistory } from "react-router-dom";
import { useState, useContext } from "react";
import { adminContext } from "./context";

const Login = () => {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [admin, setAdmin] = useContext(adminContext);
  const history = new useHistory();

  const handleUser = (e) => {
    e.preventDefault();
    setUser(e.target.value);
  };

  const handlePass = (e) => {
    e.preventDefault();
    setPass(e.target.value);
  };

  const handlelogin = (e) => {
    e.preventDefault();
    if (user === "Cyan" && pass === "Blogg02") {
      alert("You are succesfully logged in!");
      setAdmin(() => true);
      console.log(admin);
      history.push("/");
    } else {
      alert("Whoops! Wrong Credentials!");
    }
  };

  return (
    <div id="loginback">
      <div id="login">
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
        <form id="loginform" onSubmit={handlelogin}>
          <h3>Great to see ya Again!</h3>
          <br />
          <label for="user">Login as :</label>
          <input
            type="text"
            id="user"
            className="textlog"
            onChange={handleUser}
          ></input>
          <br />
          <br />
          <label for="pass">Password </label>
          <input
            type="password"
            id="pass"
            className="textlog"
            onChange={handlePass}
          ></input>
          <br />
          <button className="loginbutton" onClick={handlelogin}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
