import {products} from './product.js';
import {Cart} from './cart.js';
const divProductsEle = document.querySelector('#products');
divProductsEle.setAttribute('class', 'grid grid-cols-1 gap-6 px-10 sm:grid-cols-2 lg:grid-cols-4 mt-4')
// divProductsEle.setAttribute('class', 'container row justify-content-center mx-auto');

products.forEach(product => {
    const divProductEle = document.createElement('div');
    divProductEle.setAttribute('id', product.productId);
    divProductEle.setAttribute('class', 'rounded-lg overflow-hidden bg-gray-100 pb-4');
    
    const pProductImgEle = document.createElement('img');
    pProductImgEle.setAttribute('src', product.img);
    divProductEle.appendChild(pProductImgEle);
    
    const pProductIdEle = document.createElement('p');
    pProductIdEle.textContent = product.productId;
    pProductIdEle.setAttribute('class', '-mt-12 w-full bottom-0 leading-4 py-4 text-xl font-semibold text-right px-6');
    divProductEle.appendChild(pProductIdEle);

    
    const pProductNameEle = document.createElement('p');
    pProductNameEle.textContent = product.productName;
    pProductNameEle.setAttribute('class', 'text-xl font-semibold px-6 mt-4');
    divProductEle.appendChild(pProductNameEle);
    
    const pProductStockEle = document.createElement('p');
    pProductStockEle.textContent = 'Available : ' + product.productStock;
    pProductStockEle.setAttribute('class', 'font-semibold px-6 text-gray-500');
    divProductEle.appendChild(pProductStockEle);


    const divBuyEle = document.createElement('div');
    divBuyEle.setAttribute('class', 'flex flex-row justify-between px-6');

    const pProductPriceEle = document.createElement('p');
    pProductPriceEle.textContent = product.productPrice + ' Baht';
    pProductPriceEle.setAttribute('class', 'font-semibold text-gray-500');
    divBuyEle.appendChild(pProductPriceEle);
    
    const pProductBuyEle = document.createElement('button');
    pProductBuyEle.setAttribute('type', 'button');
    
    if(product.productStock === 0){
        pProductBuyEle.setAttribute('class', 'w-40 bg-gray-400 hover:bg-gray-600 text-white py-2 px-4 rounded -mt-4');
        pProductBuyEle.textContent = 'Sold Out';
        pProductBuyEle.addEventListener('click', function(e){alert(`${e.target.parentNode.id} is out of stock.`);});
    }
    else{
        pProductBuyEle.setAttribute('class', 'w-40 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded -mt-4');
        pProductBuyEle.textContent = 'Buy';
        pProductBuyEle.addEventListener('click', Cart.addCart);
    }

    divBuyEle.appendChild(pProductBuyEle);
    divProductEle.appendChild(divBuyEle);

    divProductsEle.appendChild(divProductEle);
}
);

