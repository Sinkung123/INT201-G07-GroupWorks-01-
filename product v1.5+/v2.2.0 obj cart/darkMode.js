const bodyEle = document.getElementsByTagName('body')[0]
const darkModeEle = document.getElementById('dark-mode')
const whatModeEle = document.getElementById('modeNow')
const lightThemeIcon = document.getElementById('icon-light')
const darkThemeIcon = document.getElementById('icon-dark')
window.addEventListener('load', checkColorWhenOpen)
lightThemeIcon.addEventListener('click', darkMode)
darkThemeIcon.addEventListener('click', darkMode)

function checkColorWhenOpen(){
    bodyEle.style.backgroundColor = localStorage.getItem('bgColor');
    if(localStorage.getItem('bgColor') === 'lightColor' || localStorage.getItem('bgColor') === null){
        bodyEle.style.backgroundColor = 'white';
        lightThemeIcon.hidden = false;
        darkThemeIcon.hidden = true;
    }
    else{
        bodyEle.style.backgroundColor = '#222';
        lightThemeIcon.hidden = true;
        darkThemeIcon.hidden = false;
    }
}

function darkMode(e){
    console.log(e.target.id)
    if(e.target.id === 'lightColor'){
        bodyEle.style.backgroundColor = '#222';
        lightThemeIcon.hidden = true;
        darkThemeIcon.hidden = false;
        localStorage.setItem('bgColor', 'darkColor');
    }
    else{
        bodyEle.style.backgroundColor = 'white';
        lightThemeIcon.hidden = false;
        darkThemeIcon.hidden = true;

        localStorage.setItem('bgColor', 'lightColor');
    }
    
}