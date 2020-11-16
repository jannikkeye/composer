import styles from "!!raw-loader!../styles/shadow.css";
import { makeCustomElement } from "../lib/makeCustomElement";

const Vanilla = makeCustomElement({
  mount: (el) => {
    const html = `
      <div class="wrapper">
        <button id="inc">Increment</button>
        <h1 id="counter" class="title">0</h1>
        <button id="dec">Decrement</button>
      </div>
  `;

    el.innerHTML = html;

    const shadowRoot = el.parentNode as ShadowRoot;

    const t = shadowRoot.getElementById("counter");
    const i = shadowRoot.getElementById("inc");
    const d = shadowRoot.getElementById("dec");

    console.log(t, i, d);

    if (t && i && d) {
      i.addEventListener("click", () => {
        t.innerHTML = (parseInt(t.innerHTML) + 1).toString();
      });
      d.addEventListener("click", () => {
        t.innerHTML = (parseInt(t.innerHTML) - 1).toString();
      });
    }
  },
  styles,
  unmount: (el) => {
    el.innerHTML = "";
  },
});

window.customElements.define("composer-vanilla", Vanilla);
