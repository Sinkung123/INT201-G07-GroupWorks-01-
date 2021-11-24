import {products} from './product.js';
const countCartEle = document.getElementById('cart-count');
const deleteCartBtnEle = document.getElementById('delete-cart');
const showCartBtn = document.getElementById('show-cart');
if(JSON.parse(localStorage.getItem('cart')) === null){
    localStorage.setItem('cart', JSON.stringify([]));
}


export let Cart = {
    cart: JSON.parse(localStorage.getItem('cart')),
    addCart(e){
        const id = e.target.parentNode.parentNode.id;
        // let productIndex = Cart.cart.findIndex(item => item.productId == id);
        const productIndex = Cart.findId(id);
        const p = products.find(product => product.productId == id);
        if(productIndex === -1) {    //ถ้าไม่เจอ productนี้ในตะกร้า
            alert(`${id} added in your cart`);
            Cart.cart.push({
            productId: id,
            productName: p.productName,
            productPrice: p.productPrice,
            qty: 1
            })
        }
        // * เช็คว่าซื้อถึงจำนวนที่มีทั้งหมดหรือยัง
        else if(Cart.cart[productIndex].qty == p.productStock){
            alert(`You have purchased all ${id}`);
        }
        else{
            Cart.cart[productIndex].qty++;
        }
        localStorage.setItem('cart', JSON.stringify(Cart.cart));
        countCartEle.textContent = Cart.countCart();
    },
    removeCart(){
        Cart.cart = []
        localStorage.setItem('cart', JSON.stringify(Cart.cart));
        countCartEle.textContent = Cart.countCart();
        alert(`Remove all products in the cart.`);
    },
    countCart(){
        return Object.values(this.cart).reduce((temp, {qty}) => temp + qty, 0)
    },
    findId(id){
        return this.cart.findIndex(item => item.productId == id)
    },
    showCart(){
        Cart.cart.sort((a,b) => a.productId.localeCompare(b.productId)) //เรียง id
        let test = '';
        Cart.cart.forEach(ele => {
            test += `Id: ${ele.productId}, Name: ${ele.productName}, Price: ${ele.productPrice}, qty: ${ele.qty}\n`
        });
        alert(test)
    }
}

deleteCartBtnEle.addEventListener('click', Cart.removeCart);
countCartEle.textContent = Cart.countCart();
showCartBtn.addEventListener('click', Cart.showCart)