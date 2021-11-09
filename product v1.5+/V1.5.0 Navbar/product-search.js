import {products} from './product.js';

const sIconEle = document.getElementById('search-icon');
sIconEle.addEventListener('click', hidden);

const sFormEle = document.getElementById('shoeName');

const sButtonEle = document.getElementById('searchBtn');
sButtonEle.addEventListener('click', hiddenOtherProduct);


function hidden(){
    if(sFormEle.style.visibility == 'hidden'){
        sFormEle.style.visibility = 'visible';
        sButtonEle.style.visibility = 'visible';
    }
    else{
        sFormEle.style.visibility = 'hidden';
        sButtonEle.style.visibility = 'hidden';
    }
}

function hiddenOtherProduct() {
    products.forEach(product => {
        let pDivEle = document.getElementById(product.productId);
        if(product.productName.toLowerCase().includes(sFormEle.value.toLowerCase())){
            pDivEle.hidden = false;
        }
        else{
            pDivEle.hidden = true;
        }
    })
}