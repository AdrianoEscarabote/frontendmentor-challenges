"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var CreateElements = /*#__PURE__*/function () {
  function CreateElements(old, newLink) {
    _classCallCheck(this, CreateElements);
    this.old = old;
    this.newLink = newLink;
  }
  _createClass(CreateElements, [{
    key: "oldLink",
    value: function oldLink() {
      var p = document.createElement("p");
      p.innerText = this.old;
      p.className = "oldLink";
      return p;
    }
  }, {
    key: "newLink",
    value: function newLink() {
      var p = document.createElement("p");
      p.className = "res";
      return p;
    }
  }]);
  return CreateElements;
}();
/* 
<div id="showLink">
  <p class="oldLink">https://imacoolguy.com.br/home</p>
  <div class="link">
    <p class="res">https://irel.link/adkfsj</p>
    <button id="copy">Copy</button>
  </div>
</div>  */
exports["default"] = CreateElements;