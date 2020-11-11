/* eslint-disable prefer-arrow/prefer-arrow-functions */
type MountOptions = {
  [key: string]: any;
};

export const makeCustomElement = ({
  mount,
  styles,
  unmount,
}: {
  mount: (targetElement: HTMLElement, options: MountOptions) => void;
  styles?: string;
  unmount: (targetElement: HTMLElement) => void;
}) => {
  return class WidgetElement extends HTMLElement {
    connectedCallback() {
      if (styles !== undefined && typeof styles === "string") {
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

          mount(this.shadowRoot.getElementById("mount")!, {});
        }
      } else {
        mount(this, {});
      }
    }

    disconnectedCallback() {
      unmount(this);
    }
  };
};
