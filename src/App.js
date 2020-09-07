import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import WireframeSatu from "./pages/WireframeSatu";

import "./App.scss";
import WireframeDua from "./pages/WireframeDua";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/wireframe1" exact component={WireframeSatu} />
        <Route path="/wireframe2" exact component={WireframeDua} />
      </Switch>
    </Router>
  );
}

export default App;
