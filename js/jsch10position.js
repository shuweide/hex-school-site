let screenX = document.querySelector('.screenX');
let screenY = document.querySelector('.screenY');
let pageX = document.querySelector('.pageX');
let pageY = document.querySelector('.pageY');
let clientX = document.querySelector('.clientX');
let clientY = document.querySelector('.clientY');
let mouseImg = document.querySelector('.mouseImg');

function getPosition (e) {
  screenX.textContent = e.screenX;
  screenY.textContent = e.screenY;
  pageX.textContent = e.pageX;
  pageY.textContent = e.pageY;
  clientX.textContent = e.clientX;
  clientY.textContent = e.clientY;
  mouseImg.style.left = e.clientX + 'px';
  mouseImg.style.top = e.clientY + 'px';
}

let el = document.body;
el.addEventListener('mousemove', getPosition, false); 