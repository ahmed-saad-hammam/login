var user = [];
user = JSON.parse(localStorage.getItem('user'))

var singEmail = document.getElementById('signEmail');
var signPassword = document.getElementById('signPass');


function login(){
    if (singEmail.value == '' || signPassword.value == '') {
        document.getElementById('faulty').innerHTML = `<p class ='text-center fs-2 text-white'>All inputs are required</p>`;
    } else {
        check();
    }
}


function check() {
    for (var i = 0; i < user.length; i++) {
        if (singEmail.value == user[i].email && signPassword.value == user[i].password) {
            var y = user[i].name;
            localStorage.setItem('userName', y);
            location.href = '../home.html';
            // break; /////////////////////////////////////////////////
        }
    }
}