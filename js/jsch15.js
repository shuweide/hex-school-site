"use strict";var xhr=new XMLHttpRequest;xhr.open("get","https://hexschool.github.io/ajaxHomework/data.json",!0),xhr.send(null),xhr.onload=function(){if(console.log(xhr.responseText),200===xhr.status){var e=JSON.parse(xhr.responseText);console.log(e[0].name)}else console.log("資料錯誤")};var postHexSchoolApi=function(e){var o=document.querySelector("#accountId").value,t=document.querySelector("#passwordId").value;console.log(o),console.log(t),console.log(e.target.id);var s="application/x-www-form-urlencoded",n="email="+o+"&password="+t;"submitJsonId"===e.target.id&&(s="application/json",n=JSON.stringify({email:o,password:t})),console.log(s),console.log(n);var r=new XMLHttpRequest;r.open("post","https://hexschool-tutorial.herokuapp.com/api/signup",!0),r.setRequestHeader("Content-type",s),r.send(n),r.onload=function(){console.log(r.responseText);var e=JSON.parse(r.responseText);alert(e.message)}};document.querySelector("#submitFormId").addEventListener("click",postHexSchoolApi,!1),document.querySelector("#submitJsonId").addEventListener("click",postHexSchoolApi,!1);
//# sourceMappingURL=maps/jsch15.js.map
