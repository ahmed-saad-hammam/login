var signName = document.getElementById('signName');
var signEmail = document.getElementById('signEmail');
var signPassword = document.getElementById('signPassword');
var user = [];

if (localStorage.getItem('user') != null) {
    user = JSON.parse(localStorage.getItem('user'))
} else {
    user = [];
}


function sign() {
    if (signName.value == '' ||signEmail.value == '' ||signPassword.value == '') {
        document.getElementById('faulty').innerHTML = `<p class = 'text-center fs-2 text-white'>All inputs are required</p>`
    } else {
        var client = {
            name: signName.value,
            email: signEmail.value,
            password: signPassword.value
        }
        user.push(client);
        // location.href = '../login.html';
        location.href = '../../task/login.html';

        localStorage.setItem('user', JSON.stringify(user));
    }
}