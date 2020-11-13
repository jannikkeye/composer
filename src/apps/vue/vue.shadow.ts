import { createApp, render } from "vue";
import { makeCustomElement } from "../../lib/makeCustomElement";
import styles from "!!raw-loader!../../styles/shadow.css";

const Plain = makeCustomElement({
  mount: (el) => {
    const app = createApp({
      template: `
      <div>
        <h1 class="title">Styles loaded via remote css file.</h1>
        <p>
          This element uses globally loaded css and inherits styles loaded into
          the document. The titles styles are reset and only the color is
          applied.
        </p>
      </div>
          `,
    });

    app.mount(el);
  },
  styles,
  unmount: (el) => {
    render(null, el);
  },
});

window.customElements.define("composer-shadow-vue", Plain);
