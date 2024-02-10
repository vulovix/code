window.addEventListener("load", () => {
  const storage = localStorage.getItem("xOS_Code");
  const editor = document.querySelector("#editor");
  if (storage) {
    editor.value = storage;
  }
  editor.focus();
});
window.addEventListener("beforeunload", () => {
  const currentText = getTextToCopy();
  saveToStorage(currentText);
});
function copyToClipboard(text) {
  window.navigator.clipboard.writeText(text).catch(() => null);
}
function saveToStorage(text) {
  localStorage.setItem("xOS_Code", text);
}
function getTextToCopy() {
  const textToCopy = document.querySelector(".highlighted-code");
  return textToCopy.innerText;
}
document.addEventListener(
  "keydown",
  function (e) {
    if (
      e.key === "s" &&
      (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)
    ) {
      e.preventDefault();
      const currentText = getTextToCopy();
      saveToStorage(currentText);
      copyToClipboard(currentText);
    }
  },
  false
);
