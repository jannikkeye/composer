import React, { useState } from "react";
import ReactDOM from "react-dom";
import { makeCustomElement } from "../lib/makeCustomElement";
import styles from "!!raw-loader!../styles/shadow.css";

const App = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div className="wrapper">
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <h1 className="title">{counter}</h1>
      <button onClick={() => setCounter(counter - 1)}>Decrement</button>
    </div>
  );
};

const ReactApp = makeCustomElement({
  mount: (el) => {
    ReactDOM.render(<App />, el);
  },
  styles,
  unmount: (el) => {
    ReactDOM.unmountComponentAtNode(el);
  },
});

window.customElements.define("composer-react", ReactApp);
