import React, { useState, useContext } from "react";
import "./post.css";
import { Link, useHistory } from "react-router-dom";
import { adminContext } from "./context";
import Axios from "axios";

const Post = (props) => {
  const [admin, setAdmin] = useContext(adminContext);
  const [post, setPost] = useState(props.location.state.post);
  const [cmt, setCmt] = useState("");

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

  const handleCom = (e) => {
    e.preventDefault();
    setCmt(e.target.value);
  };

  const submitCmt = (e) => {
    e.preventDefault();
    if (cmt.length < 2) {
      alert("Please Add Your Comment!");
    } else {
      const title = post.title;
      const article = post.article;
      const date = post.date;
      const author = post.author;
      const open = Number(post.open);
      const comment = post.comment;
      comment.push(
        cmt + "_____" + String(new Date(Date.now())).substring(4, 15)
      );
      console.log(comment);

      const updated = {
        title,
        article,
        date,
        author,
        open,
        comment,
      };
      console.log(updated);

      Axios.post("http://localhost:5000/update/" + post._id, updated)
        .then((res) => console.log(res.data))
        .catch((error) => {
          console.log(error);
        });
    }
    setCmt("");
  };

  const comments = () => {
    return post.comment.map((eachcmt, i) => (
      <div key={i}>
        <p id="eachcmt">
          <i className="fas fa-quote-left "></i>
          {"   "}
          {eachcmt}
          {"   "}
          <i className="fas fa-quote-right "></i>
        </p>
        {console.log(eachcmt)}
      </div>
    ));
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

      <div className=" postDetail">
        <div className="white">
          <br />
          <br />
          <div className="content middle ">
            <p className="date">{post.date.substring(0, 10)}</p>

            <br />
            <h3 id="postTitle">{post.title}</h3>
            <br />
            <p>{post.article}</p>
            <br />
            <h6 className="date opac">---Penned By {post.author}</h6>
            <br />
          </div>
          <br />
          <br />
          <textarea
            placeholder="Your thoughts..."
            className="comntInp"
            onChange={handleCom}
            value={cmt}
          ></textarea>
          <button className="submit" onClick={submitCmt}>
            Add
          </button>
          <br />
          <br />
        </div>

        <br />
        <div id="commentSec">
          <div>
            <br />
            <p id="cmthead">Comments...</p>
            <div>{comments()}</div>
          </div>
          <br />
        </div>
      </div>
    </div>
  );
};

export default Post;
