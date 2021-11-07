import { products } from '../product.js';
const divProductsEle = document.querySelector('#products');

const divGenderFilterBar = document.querySelector('#gender-bar');
const allShoeBtnEle = document.createElement('button');
allShoeBtnEle.setAttribute('id', 'toAllShoe');
allShoeBtnEle.setAttribute('class', 'btn btn-secondary mx-1');
allShoeBtnEle.textContent = 'All Shoes';
allShoeBtnEle.onclick = function() {
    removeProductList(); 
    genProductList(); 
    changeColorButton(this);
}
divGenderFilterBar.appendChild(allShoeBtnEle);

const menShoeBtnEle = document.createElement('button');
menShoeBtnEle.setAttribute('id', 'toMenShoe');
menShoeBtnEle.setAttribute('class', 'btn btn-primary mx-1');
menShoeBtnEle.textContent = `Men's Shoes`;
menShoeBtnEle.onclick = function() {
    removeProductList(); 
    genProductList('M'); 
    changeColorButton(this);
}
divGenderFilterBar.appendChild(menShoeBtnEle);

const womenShoeBtnEle = document.createElement('button');
womenShoeBtnEle.setAttribute('id', 'toWomenShoe');
womenShoeBtnEle.setAttribute('class', 'btn btn-primary mx-1');
womenShoeBtnEle.textContent = `Women's Shoes`;
womenShoeBtnEle.onclick = function() {
    removeProductList(); 
    genProductList('F'); 
    changeColorButton(this);
}
divGenderFilterBar.appendChild(womenShoeBtnEle);

function changeColorButton(currentBtn){
    divGenderFilterBar.childNodes.forEach(button => {
        (currentBtn === button ? 
            button.setAttribute('class', 'btn btn-secondary mx-1') : button.setAttribute('class', 'btn btn-primary mx-1'));
        if(currentBtn === button);
    })
}

let genProductList = (gender = 'U') => products.forEach(product =>{
    if(gender == product.productGender || gender === 'U'){
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


let removeProductList = () => {
    let size = divProductsEle.childNodes.length;
    for(let i = 0; i < size; i++){
        divProductsEle.removeChild(divProductsEle.childNodes[0]);
    }
}