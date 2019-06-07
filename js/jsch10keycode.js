"use strict";

var body = document.body;

function goRocket(e) {
  console.log(e);

  switch (e.key) {
    case "1":
      document.querySelector('.rocket-1').style.bottom = '2000px';
      break;

    case "2":
      document.querySelector('.rocket-2').style.bottom = '2000px';
      break;

    case "3":
      document.querySelector('.rocket-3').style.bottom = '2000px';
      break;

    case "0":
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = document.querySelectorAll('.rocket')[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var rocket = _step.value;
          rocket.style.bottom = '0px';
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

  }
}

body.addEventListener('keydown', goRocket, false);
//# sourceMappingURL=../maps/jsch10keycode.js.map
