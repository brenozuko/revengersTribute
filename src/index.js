import React from "react";
import ReactDOM from "react-dom";
import "./styles/reset.css";
import "./styles/settings/colors.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Video from "./pages/Video";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/video/new" exact component={Video} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
