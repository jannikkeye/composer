import styles from "!!raw-loader!../../styles/shadow.css";
import { makeCustomElement } from "../../lib/makeCustomElement";

const Shadow = makeCustomElement({
  mount: (el) => {
    const html = `
      <div>
        <h1 class="title">
          Styles bundled with custom element via shadow DOM.
        </h1>
        <p>
          Styles of this custom element are not influenced by globally loaded
          styles.
        </p>
      </div>`;

    el.innerHTML = html;
  },
  styles,
  unmount: (el) => {
    el.innerHTML = "";
  },
});

window.customElements.define("composer-shadow-vanilla", Shadow);
