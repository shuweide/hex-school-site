let xhr = new XMLHttpRequest();

xhr.open('get', 'https://hexschool.github.io/ajaxHomework/data.json', true);
xhr.send(null);
xhr.onload = function () {
  console.log(xhr.responseText);
  if (xhr.status === 200) {
    let str = JSON.parse(xhr.responseText);
    console.log(str[0].name);
  } else {
    console.log('資料錯誤');
  }
};

let postHexSchoolApi = function (e) {
  e.preventDefault();
  e.stopPropagation();
  let account = document.querySelector('#accountId').value;
  let password = document.querySelector('#passwordId').value;
  console.log(account);
  console.log(password);
  console.log(e.target.id);

  let contentType = 'application/x-www-form-urlencoded';
  let body = 'email=' + account + '&password=' + password;

  if (e.target.id === 'submitJsonId') {
    contentType = 'application/json';
    body = JSON.stringify({
      email: account,
      password: password
    });
  }
  console.log(contentType);
  console.log(body);
  //https://github.com/hexschool/nodejs_ajax_tutorial
  let xhr2 = new XMLHttpRequest();
  xhr2.open('post', 'https://hexschool-tutorial.herokuapp.com/api/signup', true);
  xhr2.setRequestHeader('Content-type', contentType);
  xhr2.send(body);
  xhr2.onload = function () {
    console.log(xhr2.responseText);
  };
};

//Form Click
document.querySelector('#submitFormId')
  .addEventListener('click', postHexSchoolApi, false);
//Json Click
document.querySelector('#submitJsonId')
  .addEventListener('click', postHexSchoolApi, false);