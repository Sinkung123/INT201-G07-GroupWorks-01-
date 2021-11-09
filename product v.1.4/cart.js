const countCartEle = document.getElementById('cart-count');
const deleteCartBtnEle = document.getElementById('delete-cart');
deleteCartBtnEle.addEventListener("click",removeCart);
export let cart = [];

export function addCart(e){
    let id = e.target.parentNode.id;
    let x = cart.findIndex(cart => cart.productId == id);
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
    else{
        cart[x].qty++;
    }
    countCartEle.textContent = countCart();
    console.log(e)
    console.log(e.target)
    console.log(e.target.parentNode)
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


