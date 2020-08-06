import React from "react";
import { useState } from "react";
import "./new.css";
import axios from "axios";

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

    var date = "22-10-2020";

    if (blog.length < 5 && title.length < 2) {
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
    if (res == "y" || res == "Y") {
      setBlog("");
    }
  };

  return (
    <div>
      <br />
      <h3>Create your story!</h3>
      <form onSubmit={handleSubmit}>
        <br />
        <div>
          <label for="title">
            Title &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={handleTitle}
            required
          ></input>
          <br />

          <label for="author">Pen Name &nbsp;</label>
          <input type="text" id="author" onChange={handleAuth}></input>
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
            <div>
              <button className="btn btn-primary" onClick={handleSubmit}>
                Submit
              </button>
              <button className="btn btn-danger" onClick={handleClear}>
                Clear
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default NewPost;
