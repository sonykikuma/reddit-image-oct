import React from "react";
import ReactDOM from "react-dom";
import MainContainer from "./client/containers/MainContainer";
import "./client/assets/styles/styles.css";

global.BASE_URL = "https://www.reddit.com/r";
global.DEFAULT_LIMIT = 25;

ReactDOM.render(<MainContainer />, document.getElementById("root"));
