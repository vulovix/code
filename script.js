document.onload = function () {
  document.getElementsByTagName("textarea")[0].focus();
};
function copyToClipboard(text) {
  window.navigator.clipboard
    .writeText(text)
    .then(() => console.log("Copied to clipboard!"))
    .catch(() => null);
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
      copyToClipboard(getTextToCopy());
    }
    if (
      e.key === "c" &&
      (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)
    ) {
      e.preventDefault();
      copyToClipboard(getTextToCopy());
    }
  },
  false
);
