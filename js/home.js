document.getElementById('userName').innerHTML = localStorage.getItem('userName');


function logBtn(){
    localStorage.removeItem('userName');
}