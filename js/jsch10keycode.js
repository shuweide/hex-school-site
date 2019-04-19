let body = document.body;

function goRocket (e) {
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
      for (let rocket of document.querySelectorAll('.rocket')) {
        rocket.style.bottom = '0px';
      }
  }
}


body.addEventListener('keydown', goRocket, false);