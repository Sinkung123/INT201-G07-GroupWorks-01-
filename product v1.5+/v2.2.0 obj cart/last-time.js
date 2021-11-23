const today = new Date();
const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
const dateTime = date+' '+time;

const lastTimeLoginEle = document.getElementById('last-time-login');

if(localStorage.getItem('lastTimeLogin') !== null){
    lastTimeLoginEle.textContent = 'Last time: '+ localStorage.getItem('lastTimeLogin');
}

window.addEventListener('load', () => localStorage.setItem('lastTimeLogin', dateTime));
