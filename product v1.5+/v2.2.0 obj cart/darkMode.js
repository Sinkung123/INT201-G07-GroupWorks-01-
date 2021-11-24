const bodyEle = document.getElementsByTagName('body')[0]
const lightThemeIcon = document.getElementById('icon-light')
const darkThemeIcon = document.getElementById('icon-dark')
window.addEventListener('load', darkMode)
lightThemeIcon.addEventListener('click', darkMode)
darkThemeIcon.addEventListener('click', darkMode)

function darkMode(e){
    if(e.target.id === 'lightColor' || localStorage.getItem('bgColor') === 'darkColor' && e.target.nodeType == 9){
        bodyEle.style.backgroundColor = '#222';
        lightThemeIcon.hidden = true;
        darkThemeIcon.hidden = false;
        if(e.target.nodeType == 1){
            localStorage.setItem('bgColor', 'darkColor');
        } 
    }
    else{
        bodyEle.style.backgroundColor = 'white';
        lightThemeIcon.hidden = false;
        darkThemeIcon.hidden = true;
        if(e.target.nodeType == 1) {
            localStorage.setItem('bgColor', 'lightColor');
        }
    }
}