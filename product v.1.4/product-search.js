import {products} from './product.js';
import {addCart} from './cart.js';
const divProductsEle = document.querySelector('#products');

const sIconEle = document.getElementById('search-icon');
sIconEle.addEventListener('click', hidden);

const sFormEle = document.getElementById('shoeName');

const sButtonEle = document.getElementById('searchBtn');
sButtonEle.addEventListener('click', function() {
    removeProductList(); 
    createProductByName(shoeName.value);
})

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

let createProductByName = (search) => products.forEach(product => {
    if(product.productName.toLowerCase().match(search.toLowerCase())){
        const divProductEle = document.createElement('div');
        divProductEle.setAttribute('id', product.productId);
        divProductEle.setAttribute('class', 'col-4 card border-0 mb-4 mx-2 p-0');
        divProductEle.setAttribute('style', 'cursor: pointer; width: 25em;')

        const pProductImgEle = document.createElement('img');
        pProductImgEle.setAttribute('src', product.img);
        pProductImgEle.setAttribute('class', 'card-img-top');
        divProductEle.appendChild(pProductImgEle);
      
        const pProductIdEle = document.createElement('h5');
        pProductIdEle.textContent = product.productId;
        pProductIdEle.setAttribute('class', 'card-title text-center');
        // pProductIdEle.setAttribute('style', 'margin: -40px 0px 30px;');
        pProductIdEle.setAttribute('style', 'margin: -380px 0px 370px;');
        divProductEle.appendChild(pProductIdEle);
      
        const pProductNameEle = document.createElement('h5');
        pProductNameEle.textContent = product.productName;
        pProductNameEle.setAttribute('class', 'card-title');
        divProductEle.appendChild(pProductNameEle);
      
        const pProductPriceEle = document.createElement('h6');
        pProductPriceEle.textContent = product.productPrice + ' Baht';
        pProductPriceEle.setAttribute('class', 'card-text text-secondary');
        divProductEle.appendChild(pProductPriceEle);
        
        const pProductStockEle = document.createElement('h6');
        pProductStockEle.textContent = 'Available : ' + product.productStock;
        pProductStockEle.setAttribute('class', 'card-text text-secondary');
        divProductEle.appendChild(pProductStockEle);
      
        const pProductBuyEle = document.createElement('button');
        pProductBuyEle.setAttribute('type', 'button');
        pProductBuyEle.setAttribute('class', 'btn btn-primary');
        pProductBuyEle.textContent = 'Buy Now';
        pProductBuyEle.addEventListener("click", addCart);
        divProductEle.appendChild(pProductBuyEle);
      
        divProductsEle.appendChild(divProductEle);
    }
})

let removeProductList = () => {
    let size = divProductsEle.childNodes.length;
    for(let i = 0; i < size; i++){
        divProductsEle.removeChild(divProductsEle.childNodes[0]);
    }
}

