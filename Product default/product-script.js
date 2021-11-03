import { products } from './product.js';
const divProductsEle = document.querySelector('#products');
divProductsEle.setAttribute('class', 'container row mx-auto')
// divProductsEle.setAttribute('class', 'container row justify-content-center mx-auto');

for (let product of products) {
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
    
    // const pProductBuyEle = document.createElement('button');
    // pProductBuyEle.setAttribute('type', 'button');
    // pProductBuyEle.setAttribute('class', 'btn btn-primary');
    // pProductBuyEle.textContent = 'Buy Now';
    // pProductBuyEle.onclick = function() {}
    // divProductEle.appendChild(pProductBuyEle);
    divProductsEle.appendChild(divProductEle);

}

// const toAllShoeEle = document.querySelector('#toAllShoe');
// toAllShoeEle.onclick = function() {removeProductList(); genProductList(); changeColorButton(toAllShoeEle);}
// const toMenShoeEle = document.querySelector('#toMenShoe');
// toMenShoeEle.onclick = function() {removeProductList(); genProductList('M'); changeColorButton(toMenShoeEle);}

// const toWomenShoeEle = document.querySelector('#toWomenShoe');
// toWomenShoeEle.onclick = function() {removeProductList(); genProductList('F'); changeColorButton(toWomenShoeEle);}


function genProductList(gender = 'U'){
    for (let product of products) {
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
          
            // const pProductBuyEle = document.createElement('button');
            // pProductBuyEle.setAttribute('type', 'button');
            // pProductBuyEle.setAttribute('class', 'btn btn-primary');
            // pProductBuyEle.textContent = 'Buy Now';
            // pProductBuyEle.onclick = function() {}
            // divProductEle.appendChild(pProductBuyEle);
          
            divProductsEle.appendChild(divProductEle);
        }
    }
}

function changeColorButton(type){
    toAllShoeEle.setAttribute('class', 'btn btn-primary')
    toMenShoeEle.setAttribute('class', 'btn btn-primary')
    toWomenShoeEle.setAttribute('class', 'btn btn-primary')
    type.setAttribute('class', 'btn btn-secondary')
}

function removeProductList(){
    let size = divProductsEle.childNodes.length;
    for(let i = 0; i < size; i++){
      divProductsEle.removeChild(divProductsEle.childNodes[0]);
    }
    // for(let product of divProductsEle.childNodes){
    //     console.log(product)
    //     divProductsEle.removeChild(product);
    // }
}
