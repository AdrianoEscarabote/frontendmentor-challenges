"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = handleMobile;
function handleMobile(param) {
  param.addEventListener("click", function () {
    document.querySelector(".nav-content").classList.toggle("nav-mobile");
  });
}