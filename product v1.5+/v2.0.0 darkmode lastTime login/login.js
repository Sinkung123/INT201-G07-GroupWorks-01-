import {CookieUtil} from './cookie-script.js';

const welcomeTextEle = document.getElementById('welcome');
const userNameEle = document.getElementById('user-name');
const signInBtnEle = document.getElementById('sign-in');
const signOutBtnEle = document.getElementById('sign-out');

signInBtnEle.addEventListener('click', signIn);
signOutBtnEle.addEventListener('click', signOut);

if(CookieUtil.get('user') != null){
    signInBtnEle.hidden = true;
    signOutBtnEle.hidden = false;
    welcomeTextEle.hidden = false;
    userNameEle.hidden = false;
    userNameEle.textContent = CookieUtil.get('user');
}
function signIn(){
    CookieUtil.set('user', 'Tester001', new Date('January 1, 2022'));
    signInBtnEle.hidden = true;
    signOutBtnEle.hidden = false;
    welcomeTextEle.hidden = false;
    userNameEle.hidden = false;

    userNameEle.textContent = CookieUtil.get('user');
}
function signOut(){
    CookieUtil.unset('user')
    signInBtnEle.hidden = false;
    signOutBtnEle.hidden = true;
    welcomeTextEle.hidden = true;
    userNameEle.hidden = true;
}