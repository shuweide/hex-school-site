"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var menu={ham:{price:50,cal:600},coke:{price:20,cal:100}};function getPrice(e,o){return o*e}document.getElementById("countId").onclick=function(){var e=document.getElementById("hamNumId").value,o=document.getElementById("cokeNumId").value;console.log("hamNum is "+_typeof(e)),console.log("cokeNum is "+_typeof(o)),document.getElementById("totalId").textContent=getPrice(e,menu.ham.price)+getPrice(o,menu.coke.price)};var check=function(){console.log(ham.value),console.log(coke.value),""!==ham.value&&""!==coke.value?button.disabled=!1:button.disabled=!0},ham=document.querySelector("#hamNumId"),coke=document.querySelector("#cokeNumId"),button=document.querySelector("#countId");ham.addEventListener("blur",check,!1),coke.addEventListener("blur",check,!1);
//# sourceMappingURL=../maps/ch5.js.map
