import {CookieUtil} from './cookie-script.js';

const welcomeTextEle = document.getElementById('welcome');
const userNameEle = document.getElementById('user-name');
const signInBtnEle = document.getElementById('sign-in');
const signOutBtnEle = document.getElementById('sign-out');

signInBtnEle.addEventListener('click', signIn);
signOutBtnEle.addEventListener('click', signOut);

function signIn(){
    CookieUtil.set('user', 'Tester001');
    signInBtnEle.hidden = true;
    signOutBtnEle.hidden = false;
    welcomeTextEle.hidden = false;
    userNameEle.hidden = false;

    userNameEle.textContent = CookieUtil.get('user');
}
function signOut(){
    CookieUtil.set('user', 'reading', new Date('January 1, 2021'));
    signInBtnEle.hidden = false;
    signOutBtnEle.hidden = true;
    welcomeTextEle.hidden = true;
    userNameEle.hidden = true;
}