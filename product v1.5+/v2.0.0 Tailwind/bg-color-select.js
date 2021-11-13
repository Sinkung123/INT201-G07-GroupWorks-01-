const bodyEle = document.getElementsByTagName('body')[0]
const BgColorSelectEle = document.getElementById('bg-color-select')
BgColorSelectEle.addEventListener('change', changesBgColor)
bodyEle.style.backgroundColor = localStorage.getItem('bgColor');
BgColorSelectEle.childNodes.forEach(node => {
    if(node.value === localStorage.getItem('bgColor')){
        node.selected = true;
    }
    else{
        node.selected = false;
    }
});


function changesBgColor() {
    localStorage.setItem('bgColor', BgColorSelectEle.value);
    bodyEle.style.backgroundColor = BgColorSelectEle.value; 
}



