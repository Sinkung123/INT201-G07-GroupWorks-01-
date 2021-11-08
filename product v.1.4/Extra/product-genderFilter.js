import { products } from '../product.js';
const divProductsEle = document.querySelector('#products');
const genderFilterEle = document.getElementById('gender-filer');
const allShoeBtnEle = document.getElementById('toAllShoe');
allShoeBtnEle.addEventListener('click', removeProductList);
allShoeBtnEle.addEventListener('click', genProductList);
allShoeBtnEle.addEventListener('click', changeColorButton);

const menShoeBtnEle = document.getElementById('toMenShoe');
menShoeBtnEle.addEventListener('click', removeProductList);
menShoeBtnEle.addEventListener('click', genProductList);
menShoeBtnEle.addEventListener('click', changeColorButton);


const womenShoeBtnEle = document.getElementById('toWomenShoe')
womenShoeBtnEle.addEventListener('click', removeProductList);
womenShoeBtnEle.addEventListener('click', genProductList);
womenShoeBtnEle.addEventListener('click', changeColorButton);


function changeColorButton(e){
    // let allBtn = genderFilterEle.childNodes.filter(ele => ele.nodeType != 3);
    genderFilterEle.childNodes.forEach(button => {
        (e.target === button ? 
            button.setAttribute('class', 'btn btn-secondary mx-1') : button.setAttribute('class', 'btn btn-primary mx-1'));
        if(e.target === button);
    })
}

function genProductList(event){
    products.forEach(product => {
        if(event.target.value == product.productGender || event.target.value === 'U'){
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
            pProductBuyEle.setAttribute('id', 'buyBtn' + product.productId);
            pProductBuyEle.setAttribute('type', 'button');
            pProductBuyEle.setAttribute('class', 'btn btn-primary');
            pProductBuyEle.textContent = 'Buy Now';
            pProductBuyEle.onclick = function() {}
            // pProductBuyEle.addEventListener("click", addCart);
            divProductEle.appendChild(pProductBuyEle);
        
            divProductsEle.appendChild(divProductEle);
        }
    })
}


function removeProductList() {
    let size = divProductsEle.childNodes.length;
    for(let i = 0; i < size; i++){
        divProductsEle.removeChild(divProductsEle.childNodes[0]);
    }
}