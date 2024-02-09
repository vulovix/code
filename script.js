window.addEventListener("load", (event) => {
  console.log("load");
  const storage = localStorage.getItem("Copylot");
  console.log(storage);
  if (storage) {
    document.getElementsByTagName("textarea")[0].value = storage;
  }
  document.getElementsByTagName("textarea")[0].focus();
});
window.addEventListener("beforeunload", () => {
  const currentText = getTextToCopy();
  saveToStorage(currentText);
});
function copyToClipboard(text) {
  window.navigator.clipboard
    .writeText(text)
    .then(() => console.log("Copied to clipboard!"))
    .catch(() => null);
}
function saveToStorage(text) {
  localStorage.setItem("Copylot", text);
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
