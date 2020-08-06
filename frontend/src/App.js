import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Main from "./components/main";
import NewPost from "./components/new";

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" exact component={Main} />
        <Route path="/new" component={NewPost} />
      </div>
    </Router>
  );
}

export default App;
