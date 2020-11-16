/* eslint-disable prefer-arrow/prefer-arrow-functions */
export const makeCustomElement = ({
  mount,
  styles = "",
  unmount,
}: {
  mount: (targetElement: HTMLElement) => void;
  styles: string;
  unmount: (targetElement: HTMLElement) => void;
}) => {
  return class Element extends HTMLElement {
    connectedCallback() {
      this.attachShadow({ mode: "open" });
      const template = document.createElement("template");

      template.innerHTML = `
            <style>
                ${styles}
            </style>
            <div id="mount"></div>
            `;

      if (this.shadowRoot) {
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        mount(this.shadowRoot.getElementById("mount")!);
      }
    }

    disconnectedCallback() {
      unmount(this);
    }
  };
};
