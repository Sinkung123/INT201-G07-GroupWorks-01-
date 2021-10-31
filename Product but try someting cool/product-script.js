import { productsM } from "./productM.js";
import { productsF } from "./productF.js";
const divProductsEle = document.querySelector("#products");
divProductsEle.setAttribute("class", "container row justify-content-center mx-auto");

const button2ProductEle = document.createElement("button");
button2ProductEle.setAttribute("type", "button");
button2ProductEle.setAttribute("class", "btn btn-primary");
button2ProductEle.textContent = "รองเท้าผู้ชาย";
button2ProductEle.onclick = function() {toMaleShoe()};
button2ProductEle.setAttribute("style", "margin-bottom: 10px; background-color: gray")
divProductsEle.appendChild(button2ProductEle);

const button1ProductEle = document.createElement("button");
button1ProductEle.setAttribute("type", "button");
button1ProductEle.setAttribute("class", "btn btn-primary");
button1ProductEle.textContent = "รองเท้าผู้หญิง";
button1ProductEle.setAttribute("style", "margin-bottom: 10px; background-color: blue")
button1ProductEle.onclick = function() {toFemaleShoe()};

divProductsEle.appendChild(button1ProductEle);



for (let product of productsM) {
  const divProductEle = document.createElement("div");
  divProductEle.setAttribute("id", product.productId);
  divProductEle.setAttribute("class", "container col-4 mx-auto");
  divProductEle.setAttribute("style", "margin-bottom: 50px; text-align: center;")

  const pProductImgEle = document.createElement("img");
  pProductImgEle.setAttribute("src", product.img);
  pProductImgEle.setAttribute("height", 200);
  divProductEle.appendChild(pProductImgEle);

  const pProductIdEle = document.createElement("p");
  pProductIdEle.textContent = product.productId;
  divProductEle.appendChild(pProductIdEle);

  const pProductNameEle = document.createElement("p");
  pProductNameEle.textContent = product.productName;
  divProductEle.appendChild(pProductNameEle);

  const pProductPriceEle = document.createElement("p");
  pProductPriceEle.textContent = product.price + " Baht";
  divProductEle.appendChild(pProductPriceEle);
  
  const pProductStockEle = document.createElement('p');
  pProductStockEle.textContent = "Available : " + product.stock;
  divProductEle.appendChild(pProductStockEle);

  const pProductBuyEle = document.createElement("button");
  pProductBuyEle.setAttribute("type", "button");
  pProductBuyEle.setAttribute("class", "btn btn-primary");
  pProductBuyEle.textContent = "Buy Now";
  divProductEle.appendChild(pProductBuyEle);

  divProductsEle.appendChild(divProductEle);
}


function toFemaleShoe(){
  button1ProductEle.setAttribute("style", "margin-bottom: 10px; background-color: gray")
  button2ProductEle.setAttribute("style", "margin-bottom: 10px; background-color: blue")
  for (let product of productsM){
    let removeId = document.getElementById(product.productId);
    divProductsEle.removeChild(removeId);
  }
  for (let product of productsF) {
    const divProductEle = document.createElement("div");
    divProductEle.setAttribute("id", product.productId);
    divProductEle.setAttribute("class", "container col-4 mx-auto");
    divProductEle.setAttribute("style", "margin-bottom: 50px; text-align: center;")
  
    const pProductImgEle = document.createElement("img");
    pProductImgEle.setAttribute("src", product.img);
    pProductImgEle.setAttribute("height", 200);
    divProductEle.appendChild(pProductImgEle);
  
    const pProductIdEle = document.createElement("p");
    pProductIdEle.textContent = product.productId;
    divProductEle.appendChild(pProductIdEle);
  
    const pProductNameEle = document.createElement("p");
    pProductNameEle.textContent = product.productName;
    divProductEle.appendChild(pProductNameEle);
  
    const pProductPriceEle = document.createElement("p");
    pProductPriceEle.textContent = product.price + " Baht";
    divProductEle.appendChild(pProductPriceEle);
    
    const pProductStockEle = document.createElement('p');
    pProductStockEle.textContent = "Available : " + product.stock;
    divProductEle.appendChild(pProductStockEle);
  
    const pProductBuyEle = document.createElement("button");
    pProductBuyEle.setAttribute("type", "button");
    pProductBuyEle.setAttribute("class", "btn btn-primary");
    pProductBuyEle.textContent = "Buy Now";
    divProductEle.appendChild(pProductBuyEle);
  
    divProductsEle.appendChild(divProductEle);
  }
}
function toMaleShoe(){
  button2ProductEle.setAttribute("style", "margin-bottom: 10px; background-color: gray")
  button1ProductEle.setAttribute("style", "margin-bottom: 10px; background-color: blue")
  for (let product of productsF){
    let removeId = document.getElementById(product.productId);
    divProductsEle.removeChild(removeId);
  }
  for (let product of productsM) {
    const divProductEle = document.createElement("div");
    divProductEle.setAttribute("id", product.productId);
    divProductEle.setAttribute("class", "container col-4 mx-auto");
    divProductEle.setAttribute("style", "margin-bottom: 50px; text-align: center;")
  
    const pProductImgEle = document.createElement("img");
    pProductImgEle.setAttribute("src", product.img);
    pProductImgEle.setAttribute("height", 200);
    divProductEle.appendChild(pProductImgEle);
  
    const pProductIdEle = document.createElement("p");
    pProductIdEle.textContent = product.productId;
    divProductEle.appendChild(pProductIdEle);
  
    const pProductNameEle = document.createElement("p");
    pProductNameEle.textContent = product.productName;
    divProductEle.appendChild(pProductNameEle);
  
    const pProductPriceEle = document.createElement("p");
    pProductPriceEle.textContent = product.price + " Baht";
    divProductEle.appendChild(pProductPriceEle);
    
    const pProductStockEle = document.createElement('p');
    pProductStockEle.textContent = "Available : " + product.stock;
    divProductEle.appendChild(pProductStockEle);
  
    const pProductBuyEle = document.createElement("button");
    pProductBuyEle.setAttribute("type", "button");
    pProductBuyEle.setAttribute("class", "btn btn-primary");
    pProductBuyEle.textContent = "Buy Now";
    divProductEle.appendChild(pProductBuyEle);
  
    divProductsEle.appendChild(divProductEle);
  }
}
