const browserAPI = typeof browser !== 'undefined' ? browser : chrome;

const DISPLAY_NONE = `{
  display: none !important;
}
`;

function injectGlobalCSS(content, className) {
  const existingStyle = document.querySelector(`style.${className}`);
  if (existingStyle) {
    return;
  }
  
  const style = document.createElement("style");
  style.className = className;
  style.textContent = content;

  document.head.appendChild(style);
}

function formStyleContent(selectors) {
  return selectors.join(", ") + " " + DISPLAY_NONE;
}

function main() {
  if (typeof config === 'undefined') {
    console.error('Config is not defined. Make sure const.js is loaded first.');
    return;
  }
  
  browserAPI.storage.local.get(
    config.map((p) => p.name),
    (result) => {
      if (browserAPI.runtime.lastError) {
        console.warn('Storage error:', browserAPI.runtime.lastError);
        return;
      }
      
      config.forEach((p) => {
        if (result[p.name]) {
          injectGlobalCSS(formStyleContent(p.selectors), p.name);
        }
      });
    }
  );
  
  browserAPI.storage.onChanged.addListener((changes, namespace) => {
    if (namespace === 'local') {
      config.forEach((p) => {
        if (p.name in changes) {
          const styleElement = document.querySelector(`style.${p.name}`);
          
          if (changes[p.name].newValue) {
            if (!styleElement) {
              injectGlobalCSS(formStyleContent(p.selectors), p.name);
            }
          } else {
            if (styleElement) {
              styleElement.remove();
            }
          }
        }
      });
    }
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', main);
} else {
  main();
}
