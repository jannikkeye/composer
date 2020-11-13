import config from "../../data/config.json";

export const getUis = () => {
  return config.uis.map((ui) => {
    if (process.env.NODE_ENV === "production") {
      return {
        ...ui,
        js: ui.js
          .replace("http:", window.location.protocol)
          .replace("localhost", window.location.hostname)
          .replace(
            ":3000",
            window.location.port ? ":" + window.location.port : ""
          ),
        css: ui.css
          ? ui.css
              .replace("http:", window.location.protocol)
              .replace("localhost", window.location.hostname)
              .replace(
                ":3000",
                window.location.port ? ":" + window.location.port : ""
              )
          : ui.css,
      };
    }

    return ui;
  });
};
