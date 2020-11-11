import "@webcomponents/custom-elements";
import "regenerator-runtime/runtime";
import React from "react";
import ReactDOM from "react-dom";
import Root from "./Root";

const mountNode = document.getElementById("app");

ReactDOM.render(<Root />, mountNode);
