document.getElementById('countId').onclick = function () {
  let hamNum = document.getElementById('hamNumId').value;
  let cokeNum = document.getElementById('cokeNumId').value;
  console.log('hamNum is ' + typeof (hamNum));
  console.log('cokeNum is ' + typeof (cokeNum));
  document.getElementById('totalId').textContent =
    getHamPrice(parseInt(hamNum)) + getCokePrice(parseInt(cokeNum));
};

function getHamPrice (num) {
  let hamPrice = 50;
  return hamPrice * num;
}

function getCokePrice (num) {
  let cokePrice = 20;
  return cokePrice * num;
}

