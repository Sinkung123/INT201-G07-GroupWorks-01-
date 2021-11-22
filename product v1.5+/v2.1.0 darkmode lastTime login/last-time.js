var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;

const lastTimeLoginEle = document.getElementById('last-time-login');

if(localStorage.getItem('lastTimeLogin') !== null){
    lastTimeLoginEle.textContent = 'Last time: '+ localStorage.getItem('lastTimeLogin');
}

window.addEventListener('load', () => localStorage.setItem('lastTimeLogin', dateTime));
