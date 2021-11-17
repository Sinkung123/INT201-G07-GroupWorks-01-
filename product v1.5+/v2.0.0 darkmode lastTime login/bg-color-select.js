const bodyEle = document.getElementsByTagName('body')[0]
const darkModeEle = document.getElementById('dark-mode')
const whatModeEle = document.getElementById('modeNow')
window.addEventListener('load', checkColorWhenOpen)
darkModeEle.addEventListener('click', darkMode)



function checkColorWhenOpen(){
    bodyEle.style.backgroundColor = localStorage.getItem('bgColor');
    if(localStorage.getItem('bgColor') === 'white'|| localStorage.getItem('bgColor') === null){
        darkModeEle.innerHTML = `<svg id="dark-mode" xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>`
    }
    else{
        darkModeEle.innerHTML = `<svg id="dark-mode" xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>`
    }
}



function darkMode(){
    if(localStorage.getItem('bgColor') === 'white' || localStorage.getItem('bgColor') === null){
        bodyEle.style.backgroundColor = '#222';
        darkModeEle.innerHTML = `<svg id="dark-mode" xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>`
      
        localStorage.setItem('bgColor', '#222');
    }
    else{
        bodyEle.style.backgroundColor = 'white';
        darkModeEle.innerHTML = `<svg id="dark-mode" xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>`

        localStorage.setItem('bgColor', 'white');
    }
    
}
