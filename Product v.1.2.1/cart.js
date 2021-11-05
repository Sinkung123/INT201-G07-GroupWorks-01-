
export let cart = [];

const countProduct = document.querySelector('#count');
const deleteBtn = document.querySelector('#delete');
deleteBtn.addEventListener("click",removeCart);


export function addCart(event)
{ 
    let id = event.target.id;
    let qty = 1 ;
    let x = cart.filter( cart => cart.pId == id );
    if(cart.find( id => { return id === x[0];})!= undefined)
        {
            cart[cart.findIndex( id => { return id === x[0];})].qty += 1;
            countProduct.textContent = countCart();
            //console.log(cart);
        }
    else{
        cart.push({pId : id,qty : qty} );
        alert(` " ${id} " added in your cart`);
        countProduct.textContent = countCart();
        //console.log(cart);
    }
}

export function removeCart()
{ let x =[];
    cart = x;
    //console.log(cart);
    countProduct.textContent = cart.length;
}

export function countCart(){
    
    let qt = 0;
    for(let i=0;i<cart.length;i++){

       qt += cart[i].qty;

    }
    return qt ;
}
