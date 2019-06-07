"use strict";

var xhr = new XMLHttpRequest();
xhr.open('get', 'https://hexschool.github.io/ajaxHomework/data.json', true);
xhr.send(null);

xhr.onload = function () {
  console.log(xhr.responseText);

  if (xhr.status === 200) {
    var str = JSON.parse(xhr.responseText);
    console.log(str[0].name);
  } else {
    console.log('資料錯誤');
  }
};

var postHexSchoolApi = function postHexSchoolApi(e) {
  var account = document.querySelector('#accountId').value;
  var password = document.querySelector('#passwordId').value;
  console.log(account);
  console.log(password);
  console.log(e.target.id);
  var contentType = 'application/x-www-form-urlencoded';
  var body = 'email=' + account + '&password=' + password;

  if (e.target.id === 'submitJsonId') {
    contentType = 'application/json';
    body = JSON.stringify({
      email: account,
      password: password
    });
  }

  console.log(contentType);
  console.log(body); //https://github.com/hexschool/nodejs_ajax_tutorial

  var xhr2 = new XMLHttpRequest();
  xhr2.open('post', 'https://hexschool-tutorial.herokuapp.com/api/signup', true);
  xhr2.setRequestHeader('Content-type', contentType);
  xhr2.send(body);

  xhr2.onload = function () {
    console.log(xhr2.responseText);
    var response = JSON.parse(xhr2.responseText);
    alert(response.message);
  };
}; //Form Click


document.querySelector('#submitFormId').addEventListener('click', postHexSchoolApi, false); //Json Click

document.querySelector('#submitJsonId').addEventListener('click', postHexSchoolApi, false);
//# sourceMappingURL=../maps/jsch15.js.map
