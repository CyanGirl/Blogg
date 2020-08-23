import React from "react";
import { useState, useContext } from "react";
import "./new.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { adminContext } from "./context";

const Edit = (props) => {
  console.log(props);
  const [post, setPost] = useState(props.location.state.post);

  const [admin, setAdmin] = useContext(adminContext);

  const [title, setTitle] = useState(post.title);
  const [author, setAuthor] = useState(post.author);
  const [article, setArticle] = useState(post.article);
  const [date, setDate] = useState(post.date);
  const [open, setOpen] = useState(post.open);
  const [comment, setComment] = useState(post.comment);

  const handleAuth = (e) => {
    e.preventDefault();
    setAuthor(e.target.value);
  };

  const handleBlog = (e) => {
    e.preventDefault();
    setArticle(e.target.value);
  };

  const handleTitle = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (article.length < 5 || title.length < 2) {
      alert("Please fill in the details!");
    } else {
      const updated = {
        title: title,
        article: article,
        date: date,
        author: author,
        open: open,
        comment: comment,
      };
      console.log(updated);
      axios
        .post("http://localhost:5000/update/" + post._id, updated)
        .then((res) => console.log(res.data))
        .catch((error) => {
          console.log(error);
        });
      window.location = "/";
    }
  };

  const handleClear = (e) => {
    e.preventDefault();
    var res = prompt("Please type Y to continue clearing your blog!");
    if (res === "y" || res === "Y") {
      setArticle("");
    }
  };

  return (
    <div className={admin ? "ok" : "notok"}>
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
          <h3 id="newhead">Make It Awesome!</h3>
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
                value={article}
                required
              ></textarea>
              <br />
              <div className="pen">
                <br />
                <i className="fas fa-user"></i>
                <input
                  type="text"
                  id="authorinp"
                  onChange={handleAuth}
                  value={author}
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
    </div>
  );
};

export default Edit;
