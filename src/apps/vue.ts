import { createApp, ref, render } from "vue";
import { makeCustomElement } from "../lib/makeCustomElement";
import styles from "!!raw-loader!../styles/shadow.css";

const Vue = makeCustomElement({
  mount: (el) => {
    const app = createApp({
      setup: () => {
        const counter = ref(0);

        const incCounter = () => (counter.value += 1);
        const decCounter = () => (counter.value -= 1);

        return {
          counter,
          incCounter,
          decCounter,
        };
      },
      template: `
      <div class="wrapper">
        <button @click="incCounter">Increment</button>
        <h1 className="title">{{counter}}</h1>
        <button @click="decCounter">Decrement</button>
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

window.customElements.define("composer-vue", Vue);
