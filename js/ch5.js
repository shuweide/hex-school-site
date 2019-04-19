let menu = {
  ham: {
    price: 50,
    cal: 600
  },
  coke: {
    price: 20,
    cal: 100
  }
};

function getPrice (num, price) {
  return price * num;
}

document.getElementById('countId').onclick = function () {
  let hamNum = document.getElementById('hamNumId').value;
  let cokeNum = document.getElementById('cokeNumId').value;
  console.log('hamNum is ' + typeof (hamNum));
  console.log('cokeNum is ' + typeof (cokeNum));
  document.getElementById('totalId').textContent =
    getPrice(hamNum, menu.ham.price) + getPrice(cokeNum, menu.coke.price);
};

let check = function () {
  console.log(ham.value);
  console.log(coke.value);
  if (ham.value !== '' && coke.value !== '') {
    button.disabled = false;
  } else {
    button.disabled = true;
  }
};

let ham = document.querySelector('#hamNumId');
let coke = document.querySelector('#cokeNumId');
let button = document.querySelector('#countId');
ham.addEventListener('blur', check, false);
coke.addEventListener('blur', check, false);


