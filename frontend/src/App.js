import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Main from "./components/main";
import NewPost from "./components/new";
import Contact from "./components/contact";
import Post from "./components/post";
import Login from "./components/login";
import Edit from "./components/edit";
import { Contxt } from "./components/context";

function App() {
  return (
    <Contxt>
      <Router basename="/">
        <div className="App">
          <Route path="/" exact component={Main} />
          <Route path="/new" component={NewPost} />
          <Route path="/contact" component={Contact} />
          <Route path="/post" component={Post} />
          <Route path="/login" component={Login} />
          <Route path="/edit" component={Edit} />
        </div>
      </Router>
    </Contxt>
  );
}

export default App;
