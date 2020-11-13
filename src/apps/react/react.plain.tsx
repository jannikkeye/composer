import React from "react";
import ReactDOM from "react-dom";
import { makeCustomElement } from "../../lib/makeCustomElement";

const Plain = makeCustomElement({
  mount: (el) => {
    ReactDOM.render(
      <div>
        <h1 className="title">Styles loaded via remote css file.</h1>
        <p>
          This element uses globally loaded css and inherits styles loaded into
          the document. The titles styles are reset and only the color is
          applied.
        </p>
      </div>,
      el
    );
  },
  unmount: (el) => {
    ReactDOM.unmountComponentAtNode(el);
  },
});

window.customElements.define("composer-plain-react", Plain);
