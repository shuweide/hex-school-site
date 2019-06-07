"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var menu = {
  ham: {
    price: 50,
    cal: 600
  },
  coke: {
    price: 20,
    cal: 100
  }
};

function getPrice(num, price) {
  return price * num;
}

document.getElementById('countId').onclick = function () {
  var hamNum = document.getElementById('hamNumId').value;
  var cokeNum = document.getElementById('cokeNumId').value;
  console.log('hamNum is ' + _typeof(hamNum));
  console.log('cokeNum is ' + _typeof(cokeNum));
  document.getElementById('totalId').textContent = getPrice(hamNum, menu.ham.price) + getPrice(cokeNum, menu.coke.price);
};

var check = function check() {
  console.log(ham.value);
  console.log(coke.value);

  if (ham.value !== '' && coke.value !== '') {
    button.disabled = false;
  } else {
    button.disabled = true;
  }
};

var ham = document.querySelector('#hamNumId');
var coke = document.querySelector('#cokeNumId');
var button = document.querySelector('#countId');
ham.addEventListener('blur', check, false);
coke.addEventListener('blur', check, false);
//# sourceMappingURL=../maps/ch5.js.map
