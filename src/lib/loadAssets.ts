const scriptIsLoaded = (src: string) => {
  const scripts = Array.from(document.querySelectorAll("script"));

  return scripts.find((script) => script.src === src);
};

const stylesheetIsLoaded = (href: string) => {
  const links = Array.from(document.querySelectorAll("link"));

  return links.find((link) => link.href === href);
};

/**
 * Load script via script tag.
 * If script tag is present and resource loaded, resolve.
 * If script tag is present but resource not
 * loaded attach "load" event listener.
 * If script tag is not present insert into head & wait for load event.
 *
 * @param src
 */
const loadScript = async (src: string) => {
  const jsLoaded = scriptIsLoaded(src);

  return new Promise<void>((resolve, reject) => {
    if (jsLoaded) {
      if (jsLoaded.getAttribute("data-loaded") === "true") {
        resolve();
      } else {
        jsLoaded.addEventListener("load", () => {
          jsLoaded.setAttribute("data-loaded", "true");
          resolve();
        });
      }
    } else {
      const script = document.createElement("script");

      script.type = "text/javascript";
      script.src = src;

      document.head.appendChild(script);

      script.onload = () => {
        script.setAttribute("data-loaded", "true");
        resolve();
      };

      script.onerror = (event) => {
        script.remove();
        reject(event);
      };
    }
  });
};

/**
 * Load stylesheet via link.
 * If link is present and resource loaded, resolve.
 * If link is present but resource not
 * loaded attach "load" event listener.
 * If link is not present insert into head & wait for load event.
 *
 * @param href
 */
const loadStylesheet = async (href: string) => {
  const cssLoaded = stylesheetIsLoaded(href);

  return new Promise<void>((resolve, reject) => {
    if (cssLoaded) {
      if (cssLoaded.getAttribute("data-loaded") === "true") {
        resolve();
      } else {
        cssLoaded.addEventListener("load", () => resolve());
      }
    } else {
      const link = document.createElement("link");

      link.href = href;
      link.rel = "stylesheet";

      document.head.appendChild(link);

      link.onload = () => {
        link.setAttribute("data-loaded", "true");
        resolve();
      };

      link.onerror = (event) => {
        link.remove();
        reject(event);
      };
    }
  });
};

const doNotHandle = (v: any) => undefined;

/**
 * Load JS and CSS assets.
 *
 * @param assets
 */
export const loadAssets = async (assets: { js: string; css?: string }) => {
  await loadScript(assets.js);

  if (assets.css) {
    try {
      await loadStylesheet(assets.css);
    } catch (error) {
      doNotHandle(error);
    }
  }
};
