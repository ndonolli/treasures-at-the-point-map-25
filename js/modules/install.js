import { INSTALL_PROMPT_STORAGE_KEY } from "../config.js";

export function setupInstallPrompt() {
  let deferredInstallPrompt = null;
  let installPromptScheduled = false;

  function isIosDevice() {
    return /iphone|ipad|ipod/i.test(window.navigator.userAgent);
  }

  function isInStandaloneMode() {
    return window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone === true;
  }

  function hasSeenInstallPrompt() {
    try {
      return window.localStorage.getItem(INSTALL_PROMPT_STORAGE_KEY) === "true";
    } catch {
      return false;
    }
  }

  function markInstallPromptSeen() {
    try {
      window.localStorage.setItem(INSTALL_PROMPT_STORAGE_KEY, "true");
    } catch {
      // Ignore storage failures and fall back to per-page behavior.
    }
  }

  async function maybePromptForInstall() {
    if (installPromptScheduled || isInStandaloneMode() || hasSeenInstallPrompt()) {
      return;
    }

    installPromptScheduled = true;

    if (window.location.protocol === "file:") {
      installPromptScheduled = false;
      return;
    }

    if (isIosDevice()) {
      markInstallPromptSeen();
      installPromptScheduled = false;

      const wantsInstallHelp = window.confirm(
        "Would you like to install Treasures at the Point on this device?\n\nOn iPhone or iPad, tap Share and then choose Add to Home Screen."
      );

      if (wantsInstallHelp) {
        window.alert("To install this app on iPhone or iPad, tap the Share button in Safari and then choose Add to Home Screen.");
      }

      return;
    }

    if (!deferredInstallPrompt) {
      installPromptScheduled = false;
      return;
    }

    markInstallPromptSeen();
    const wantsInstall = window.confirm("Would you like to install Treasures at the Point on this device?");

    if (!wantsInstall) {
      installPromptScheduled = false;
      return;
    }

    deferredInstallPrompt.prompt();

    try {
      await deferredInstallPrompt.userChoice;
    } finally {
      deferredInstallPrompt = null;
      installPromptScheduled = false;
    }
  }

  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    deferredInstallPrompt = event;
    void maybePromptForInstall();
  });

  window.addEventListener("appinstalled", () => {
    deferredInstallPrompt = null;
    markInstallPromptSeen();
  });

  void maybePromptForInstall();
}