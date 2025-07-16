function setActualSettings() {
  chrome.storage.local.get(
    config.map((p) => p.name),
    (result) => {
      config.forEach((p) => {
        if (result[p.name]) {
          document.getElementById(p.inputId).checked = result[p.name];
        }
      });
    }
  );
}

setActualSettings();
