
//variables for cart array
let cart = [];


function addToCart(title, price) {
    cart.push({ productTitle: title, productPrice: price, productQuantity: 1});
    console.log(cart);
    renderCart();
    //cart.length()
    document.querySelector("#cart .label").innerHTML = cart.length;


}

function renderCart(){
    //bygge HTML til produkter
    let listHTML = "";

    //iterate cartArray lag <li> for hvert produkt
    //arrow () => {}

    cart.map(prod => listHTML +=
        `<li>
            <span class="title">${prod.productTitle}</span>
            <span class="price">${prod.productPrice},-</span>
            <span class="quantity">${prod.productQuantity}</span>
            <button class="delete">X</button>
        </li>`
    )

    //target selectorer typer
    //document.getElementById("")
     document.querySelector("#cartView ul").innerHTML = listHTML;

}

function toggleCart(){
    document.querySelector("#cartView").classList.toggle("hidden");
}



