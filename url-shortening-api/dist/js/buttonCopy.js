"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = buttonCopy;
function buttonCopy(copyElement) {
  var button = document.getElementById("copy");
  var res = copyElement;
  if (button.innerText === "Copy") {
    button.innerText = "Copied!";
    button.classList.add("copied");
    navigator.clipboard.writeText(res);
  } else {
    button.innerText = "Copy";
    button.classList.remove("copied");
  }
}