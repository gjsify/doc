/**
 * Cross-browser Document Ready check
 * @see https://www.competa.com/blog/cross-browser-document-ready-with-vanilla-javascript/
 * @param callback
 */
export const ready = (callback: () => void) => {
  if (!callback || typeof callback !== "function") {
    return new Error("The callback is required!");
  }

  const checkReady = () => {
    if (document.readyState !== "loading") {
      callback();
      if ((document as any).attachEvent) {
        (document as any).detachEvent("onreadystatechange", checkReady);
      }
      document.removeEventListener("DOMContentLoaded", checkReady);
    }
  };

  if ((document as any).attachEvent) {
    (document as any).attachEvent("onreadystatechange", checkReady);
  }
  if (document.addEventListener) {
    document.addEventListener("DOMContentLoaded", checkReady);
  }
  checkReady();
};
