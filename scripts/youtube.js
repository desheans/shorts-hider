const DISPLAY_NONE = `{
  display: none !important;
}
`;

function injectGlobalCSS(content, className) {
  const style = document.createElement("style");
  style.className = className;
  style.textContent = content;

  document.head.appendChild(style);
}

function formStyleContent(selectors) {
  return selectors.join(", ") + " " + DISPLAY_NONE;
}

function main() {
  chrome.storage.local.get(
    config.map((p) => p.name),
    (result) => {
      config.forEach((p) => {
        if (result[p.name]) {
          injectGlobalCSS(formStyleContent(p.selectors), p.name);
        }
      });
    }
  );
}

main();
