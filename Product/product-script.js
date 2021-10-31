import { products } from "./product.js";
console.log(products[0].productId);
const divProductsEle = document.querySelector("#products");
divProductsEle.setAttribute("class", "container row justify-content-center mx-auto");

for (let product of products) {
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
  pProductBuyEle.setAttribute("onclick", "addAlert()");
  divProductEle.appendChild(pProductBuyEle);
  divProductsEle.appendChild(divProductEle);
}
