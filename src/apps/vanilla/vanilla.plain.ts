import { makeCustomElement } from "../../lib/makeCustomElement";

const Plain = makeCustomElement({
  mount: (el) => {
    const html = `
      <div>
        <h1 class="title">Styles loaded via remote css file.</h1>
        <p>
          This element uses globally loaded css and inherits styles loaded into
          the document. The titles styles are reset and only the color is
          applied.
        </p>
      </div>`;

    el.innerHTML = html;
  },
  unmount: (el) => {
    el.innerHTML = "";
  },
});

window.customElements.define("composer-plain-vanilla", Plain);
