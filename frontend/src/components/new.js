import React from "react";
import { useState } from "react";
import "./new.css";
import axios from "axios";
import { Link } from "react-router-dom";

const NewPost = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("Anonymous");
  const [blog, setBlog] = useState("");

  const handleAuth = (e) => {
    e.preventDefault();
    setAuthor(e.target.value);
  };

  const handleBlog = (e) => {
    e.preventDefault();
    setBlog(e.target.value);
  };

  const handleTitle = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    var date = Date.now();

    if (blog.length < 5 || title.length < 2) {
      alert("Please fill in the details!");
    } else {
      const newBlog = {
        title: title,
        article: blog,
        date: date,
        author: author,
      };
      console.log(newBlog);

      axios
        .post("http://localhost:5000/new", newBlog)
        .then((res) => console.log(res.data));

      window.location = "/";
    }
  };

  const handleClear = (e) => {
    e.preventDefault();
    var res = prompt("Please type Y to continue clearing your blog!");
    if (res === "y" || res === "Y") {
      setBlog("");
    }
  };

  return (
    <div className="middle">
      <br />
      <Link to="/">
        <i className="fas fa-home"></i>
      </Link>
      <div>
        <div className="head absolute">
          <h2>Blogg</h2>
        </div>
      </div>
      <div>
        <br />
        <br />
        <br />
        <h3 id="newhead">Create your story!</h3>
      </div>
      <br />
      <form onSubmit={handleSubmit}>
        <br />
        <div id="titleinps">
          <i className="fas fa-heading" aria-hidden="true"></i>
          <input
            type="text"
            id="title"
            value={title}
            onChange={handleTitle}
            placeholder="Title"
            required
          ></input>
          <br />
        </div>
        <div className="container">
          <div className="comment">
            <textarea
              className="textinput"
              placeholder="Have your say"
              onChange={handleBlog}
              value={blog}
              required
            ></textarea>
            <br />
            <div className="pen">
              <br />
              <i className="fas fa-user"></i>
              <input
                type="text"
                id="authorinp"
                placeholder="Pen name"
                onChange={handleAuth}
              ></input>
              <br />
            </div>
            <div>
              <br />
              <button className="submit" onClick={handleSubmit}>
                Submit
              </button>
              <button className="clear" onClick={handleClear}>
                Clear
              </button>
            </div>
          </div>
        </div>
        <br />
      </form>
    </div>
  );
};

export default NewPost;
