import React from "react";
import ReactDOM from "react-dom";
import { makeCustomElement } from "../../lib/makeCustomElement";
import styles from "!!raw-loader!../../styles/shadow.css";

const Shadow = makeCustomElement({
  mount: (el) => {
    ReactDOM.render(
      <div>
        <h1 className="title">
          Styles bundled with custom element via shadow DOM.
        </h1>
        <p>
          Styles of this custom element are not influenced by globally loaded
          styles.
        </p>
      </div>,
      el
    );
  },
  styles,
  unmount: (el) => {
    ReactDOM.unmountComponentAtNode(el);
  },
});

window.customElements.define("composer-shadow-react", Shadow);
