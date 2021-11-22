import {products} from './product.js';
const countCartEle = document.getElementById('cart-count');
const deleteCartBtnEle = document.getElementById('delete-cart');
deleteCartBtnEle.addEventListener('click', removeCart);

if(JSON.parse(localStorage.getItem('cart')) === null){
    localStorage.setItem('cart', JSON.stringify([]));
}
let cart = JSON.parse(localStorage.getItem('cart'));

countCartEle.textContent = countCart();
export function addCart(e){
    let id = e.target.parentNode.parentNode.id;
    let x = cart.findIndex(cart => cart.productId == id);
    let p = products.find(product => product.productId == id);
    // let x = cart.filter(cart => cart.productId == e.target.parentNode.id);
    if(x == -1){
        alert(`${id} added in your cart`);
        cart.push({
            productId: id,
            // productName: product.productName,
            // productPrice: product.productPrice,
            qty: 1
        })
        
    }
    // * เช็คว่าซื้อถึงจำนวนที่มีทั้งหมดหรือยัง
    else if(cart[x].qty == p.productStock){
        alert(`You have purchased all ${id}`);
    }
    else{
        cart[x].qty++;
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    countCartEle.textContent = countCart();
}

export function removeCart() {
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    countCartEle.textContent = countCart();
}

export function countCart(){
    let sum = 0;
    cart.forEach(product => {sum += product.qty;})
    return sum;
}

