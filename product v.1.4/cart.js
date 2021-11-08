const countCartEle = document.getElementById('cart-count');
const deleteCartBtnEle = document.getElementById('delete-cart');
deleteCartBtnEle.addEventListener("click",removeCart);
export let cart = [];

export function addCart(e){
    let x = cart.filter(cart => cart.productId == e.target.parentNode.id);
    if(x == false){
        alert(`${e.target.parentNode.id} added in your cart`);
        cart.push({
            productId: e.target.parentNode.id,
            // productName: product.productName,
            // productPrice: product.productPrice,
            qty: 1
        })
    }
    else{
        cart[cart.findIndex(ele => {return ele.productId === e.target.parentNode.id})].qty++;
    }
    countCartEle.textContent = countCart();
}

export function removeCart() {
    cart = [];
    countCartEle.textContent = countCart();
}

export function countCart(){
    let sum = 0;
    cart.forEach(product => {sum += product.qty;})
    return sum;
}


