import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Posts = () => {
  const [articles, setArticles] = useState([]);
  const [load, setLoad] = useState(true);

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

  console.log(articles);

  return articles.map((post, i) => (
    <div key={i} className="articles">
      <p id="article">{post.title}</p>
      <p>{post.article}</p>
      <p>{post.date}</p>
      <p>Wriiten By {post.author}</p>

      <br />
    </div>
  ));
};

export default Posts;
