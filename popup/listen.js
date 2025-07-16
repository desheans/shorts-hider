function listenInputAndUpdateStorage() {
  config.forEach((p) => {
    const input = document.getElementById(p.inputId);
    input.addEventListener("change", () => {
      const data = input.checked;

      chrome.storage.local.set({ [p.name]: data }, () => {
        console.log(`Data saved: ${p.name} - ${data}`);
      });
    });
  });
}

listenInputAndUpdateStorage();
