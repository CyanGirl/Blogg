import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./postList.css";
import { Link } from "react-router-dom";

const Posts = () => {
  const [articles, setArticles] = useState([]);
  const [load, setLoad] = useState(true);
  const [count, setCount] = useState(0);

  useEffect(() => {
    axios
      .get("http://localhost:5000/")
      .then((response) => {
        setArticles(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    setLoad(false);
  }, []);

  //module to update the opening count
  const handleOpen = (post, id) => {
    setCount(count + 1);

    const title = post.title;
    const article = post.article;
    const date = post.date;
    const author = post.author;
    const open = Number(post.open) + 1;
    const comment = post.comment;

    const updated = {
      title,
      article,
      date,
      author,
      open,
      comment,
    };

    axios
      .post("http://localhost:5000/update/" + id, updated)
      .then((res) => console.log(res.data))
      .catch((error) => {
        console.log(error);
      });

    //console.log(updated, id);
  };

  // console.log(articles);

  return articles.map((post, i) => (
    <div key={i} className="back">
      {console.log(post)}
      <div className="articles">
        <br />
        <div className="flex">
          <p id="article">{load ? "Loading..." : post.title}</p>
          <p className="date"> {post.date.substring(0, 10)}</p>
        </div>
        <div className="body">
          <p>{post.article.substring(0, 50)}......</p>
        </div>
        <div></div>
        <div className="flex right">
          <Link
            to={{ pathname: "post", state: { post } }}
            onClick={() => handleOpen(post, post._id)}
          >
            <i className="fas fa-location-arrow"></i>
          </Link>
          <i className="far fa-eye"></i>
          <p id="open"> {post.open} </p>
          <i className="far fa-comments"></i>
          <p id="comt">{post.comment.length}</p>
          <i className="far fa-user" aria-hidden="true"></i>
          <p id="author"> {post.author} </p>
          <br />
        </div>
      </div>
      <br />
    </div>
  ));
};

export default Posts;
