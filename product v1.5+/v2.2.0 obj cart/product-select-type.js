import {products} from './product.js';
const selectTypeEle = document.getElementById('select-type');
const selectAllEle = document.getElementById('select-all-products');
const selectShoesEle = document.getElementById('select-shoes');
const selectClothingEle = document.getElementById('select-clothing');
selectAllEle.addEventListener('click', selectAll)
selectShoesEle.addEventListener('click', selectShoes)
selectClothingEle.addEventListener('click', selectClothing)

chagesSelectType();


console.log(selectAllEle.className)
function selectAll(){
    products.forEach(product => {
        document.getElementById(product.productId).hidden = false;
    })
    localStorage.setItem('selectType', 'select-all-products');
    chagesSelectType();
}

function selectShoes(){
    products.forEach(product => {
        let pDivEle = document.getElementById(product.productId);
        if(product.productType === 'Shoe'){
            pDivEle.hidden = false;
        }
        else{
            pDivEle.hidden = true;
        }
    })
    localStorage.setItem('selectType', 'select-shoes');
    chagesSelectType();
}

function selectClothing(){
    products.forEach(product => {
        let pDivEle = document.getElementById(product.productId);
        if(product.productType === 'Clothing'){
            pDivEle.hidden = false;
        }
        else{
            pDivEle.hidden = true;
        }
    })
    localStorage.setItem('selectType', 'select-clothing');
    chagesSelectType();
}

function chagesSelectType(){
    selectTypeEle.childNodes.forEach(node => {
        if(localStorage.getItem('selectType') == node.id){
            node.className = 'px-2 text-gray-700 hover:text-gray-900 font-semibold py-4 border-b-4 border-indigo-600';
        }
        else{
            node.className = 'px-2 text-gray-700 hover:text-gray-900 font-semibold';
        }
    });
}