import {products} from './product.js';
const divProductsEle = document.querySelector('#products');
divProductsEle.setAttribute('class', 'container row')
for(let product of products){
    const divProductEle = document.createElement('div');
    divProductEle.setAttribute('id', product.productId);
    divProductEle.setAttribute('class', 'col-3');
    divProductEle.setAttribute('style', 'border: red 1px solid')
    
    const pProductImgEle = document.createElement('img');
    pProductImgEle.setAttribute('class', 'justify-content-center')
    pProductImgEle.setAttribute('src', product.img);
    pProductImgEle.setAttribute('width', 200);
    pProductImgEle.setAttribute('height', 200);
    divProductEle.appendChild(pProductImgEle);
    
    const pProductIdEle = document.createElement('p');
    pProductIdEle.textContent = product.productId;
    divProductEle.appendChild(pProductIdEle);

    const pProductNameEle = document.createElement('p');
    pProductNameEle.textContent = product.productName;
    divProductEle.appendChild(pProductNameEle);

    const pProductPriceEle = document.createElement('p');
    pProductPriceEle.textContent = product.price + ' Baht';
    divProductEle.appendChild(pProductPriceEle);

    const pProductStockEle = document.createElement('p');
    pProductStockEle.textContent = product.stock;
    divProductEle.appendChild(pProductStockEle);

    divProductsEle.appendChild(divProductEle);
}