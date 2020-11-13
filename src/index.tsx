import "@webcomponents/custom-elements";
import "@webcomponents/custom-elements/src/native-shim.js";
import "regenerator-runtime/runtime";
import React from "react";
import ReactDOM from "react-dom";
import Root from "./Root";

const mountNode = document.createElement("div");

document.body.appendChild(mountNode);

ReactDOM.render(<Root />, mountNode);
