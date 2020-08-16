import React, { useState, useContext } from "react";
import "./post.css";
import { Link, useHistory } from "react-router-dom";
import { adminContext } from "./context";
import Axios from "axios";

const Post = (props) => {
  const [admin, setAdmin] = useContext(adminContext);
  const [post, setPost] = useState(props.location.state.post);

  const history = new useHistory();

  console.log(admin);

  const handleDelete = (e) => {
    e.preventDefault();
    var res = prompt("To continue deletion, Enter Y : ");
    if (res === "Y" || res === "y") {
      Axios.delete("http://localhost:5000/" + post._id);
      history.push("/");
      alert("Blog Deleted!");
    }
  };

  console.log(props);
  return (
    <div>
      <Link to="/">
        <i className="fas fa-home"></i>
      </Link>
      <div className={admin ? "notok" : "ok"}>
        <div className="head absolute">
          <h2>Blogg</h2>
        </div>
      </div>
      <div className={admin ? "ok" : "notok"}>
        <a href="#" onClick={handleDelete}>
          <i className="fas fa-trash-alt"></i>
        </a>
      </div>
      <div className={admin ? "ok" : "notok"}>
        <Link to={{ pathname: "edit", state: { post } }}>
          <i class="fas fa-edit"></i>
        </Link>
      </div>

      <div className="middle postDetail">
        <br />
        <br />
        <div className="content">
          <p className="date">{post.date.substring(0, 10)}</p>

          <br />
          <h3 id="postTitle">{post.title}</h3>
          <br />
          <p>{post.article}</p>
          <br />
          <h6 className="date opac">---Penned By {post.author}</h6>
          <br />
        </div>
      </div>
    </div>
  );
};

export default Post;
