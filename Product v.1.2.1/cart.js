
export let cart = [];

const countProduct = document.querySelector('#count');
const deleteBtn = document.querySelector('#delete');
deleteBtn.addEventListener("click",removeCart);


export function addCart(event)
{ 
    let id = event.target.id;
    let qty = 1 ;
    let check = false;
    if(cart.length!=0){
        for(let i=0;i<cart.length;i++)
        {
            if(check == false)
             if(cart[i].pId==id) {
                check = true ;
                cart[i].qty += 1;}
             else{check = false}           
        }
        if(check == false){
            cart.push({pId : id,qty : qty})
            alert(` " ${id} " added in your cart`);}
            countProduct.textContent = countCart();
            //console.log(cart);

    }else{        
        cart.push({pId : id,qty : qty} )
        if(cart.includes(id)){}
        else{ alert(` " ${id} " added in your cart`);}  
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