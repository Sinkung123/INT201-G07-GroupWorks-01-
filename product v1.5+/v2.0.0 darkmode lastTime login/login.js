import {CookieUtil} from './cookie-script.js';

const userNameEle = document.getElementById('user-name');

CookieUtil.set('user', 'Tester001', new Date('January 1, 2022'));
userNameEle.textContent = CookieUtil.get('user');