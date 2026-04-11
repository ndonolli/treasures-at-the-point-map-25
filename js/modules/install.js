export function setupInstallPrompt() {
  const installAppButton = document.getElementById("install-app-button");
  const installAppHint = document.getElementById("install-app-hint");
  let deferredInstallPrompt = null;

  function isChromiumBrowser() {
    return /chrome|chromium|crios/i.test(window.navigator.userAgent);
  }

  function isIosDevice() {
    return /iphone|ipad|ipod/i.test(window.navigator.userAgent);
  }

  function isInStandaloneMode() {
    return window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone === true;
  }

  function showInstallButton(label, hint = "") {
    installAppButton.hidden = false;
    installAppButton.textContent = label;

    if (hint) {
      installAppHint.hidden = false;
      installAppHint.textContent = hint;
      return;
    }

    installAppHint.hidden = true;
    installAppHint.textContent = "";
  }

  function hideInstallUi() {
    installAppButton.hidden = true;
    installAppHint.hidden = true;
    installAppHint.textContent = "";
  }

  function syncInstallUi() {
    if (isInStandaloneMode()) {
      hideInstallUi();
      return;
    }

    if (window.location.protocol === "file:") {
      showInstallButton("Install App", "Install works from the hosted site, not when opening the file directly.");
      installAppButton.disabled = true;
      return;
    }

    if (isIosDevice()) {
      showInstallButton("Install App", "On iPhone or iPad, tap Share and choose Add to Home Screen.");
      installAppButton.disabled = false;
      return;
    }

    if (!deferredInstallPrompt) {
      if (isChromiumBrowser()) {
        showInstallButton("Install App", "If Chrome does not show the install sheet, use the browser menu and choose Install app or Add to Home screen.");
        installAppButton.disabled = false;
        return;
      }

      showInstallButton("Install App");
      installAppButton.disabled = false;
      return;
    }

    showInstallButton("Install App");
    installAppButton.disabled = false;
  }

  installAppButton.addEventListener("click", async () => {
    if (deferredInstallPrompt) {
      deferredInstallPrompt.prompt();

      try {
        await deferredInstallPrompt.userChoice;
      } finally {
        deferredInstallPrompt = null;
        syncInstallUi();
      }

      return;
    }

    if (isIosDevice() && !isInStandaloneMode()) {
      window.alert("To install this app on iPhone or iPad, tap the Share button in Safari and then choose Add to Home Screen.");
      return;
    }

    if (!deferredInstallPrompt) {
      if (isChromiumBrowser()) {
        window.alert("If Chrome does not show the install sheet here, open the browser menu and choose Install app or Add to Home screen.");
        return;
      }

      window.alert("This browser has not exposed the install prompt yet. If install is supported, try again after interacting with the page or use the browser menu.");
    }
  });

  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    deferredInstallPrompt = event;
    syncInstallUi();
  });

  window.addEventListener("appinstalled", () => {
    deferredInstallPrompt = null;
    hideInstallUi();
  });

  syncInstallUi();
}