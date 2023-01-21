
//variables for cart array
let cart = [];

let cartViewState = true;


function deleteProduct(index){
//undøvendig med if siden vi ser om det er noe her

//document.getElementById("prod-" + index).classList.add("hidden");
//setTimeout( () => {cart.splice(index, 1) renderCart()}, 700)
   if(index > -1){
        cart.splice(index, 1);
    }
    renderCart();
    console.log(cart[index]);
}


function addToCart(title, price) {

   

    //if productTitle er i cart så bare oppdater productQuantity
   /*if(cart.includes(Object.keys)){
        console.log(title)
        //item.productQuantity += 1;
    }*/
    
    
    cart.push({ productTitle: title, productPrice: price, productQuantity: 1});
    //console.log(cart);
    console.log(title);
    console.log(cart);
    
    renderCart();
    document.querySelector("#cart .label").innerHTML = cart.length;

    if(document.getElementById("cartView").classList.contains("hidden")){
         toggleCart();
    }   

}

function calculatePrice(e){

    let sum = 0;
    cart.map(prod  => sum += prod.productPrice);
    document.querySelector("#total").innerHTML = sum;       

}


function renderCart(){
    //bygge HTML til produkter
    let listHTML = "";

    //if <span class="index">${index}</span>

    cart.map( (prod, index) => listHTML +=
        `<li id="prod-${index}">
            <span class="title">${prod.productTitle}</span>
            <span class="price">${prod.productPrice},-</span>
            <span class="quantity">${prod.productQuantity}</span>
            <button class="delete" onClick="deleteProduct(${index})">X</button>
        </li>`
    )


    let sum = 0;
    cart.map(
        (prod) => {
            sum += prod.productPrice;
        
        }
    );


     document.querySelector("#cartView ul").innerHTML = listHTML;
     document.querySelector("#total").innerHTML = sum;

     //calculatePrice();
     
}

function toggleCart(){

    document.querySelector("#cartView").classList.toggle("hidden");

}





