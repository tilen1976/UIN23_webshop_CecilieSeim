/*
 * TILGJENGELIGE PRODUKTER:
 * prodid: unik id for hvert produkt
 * title: produktnavn for visning på web
 * category: produktkategori
 * price: produktpris
 * storage: antall på lager
 * imagefile: filnavn til produktbilde
 */

const products = [
    {prodid: 1, title: "Dragon Zane", category: "Ninjago", price: "89", storage: 5, imagefile: "dragon_zane.webp"},
    {prodid: 2, title: "Lil'Ninja", category: "Ninjago", price: "99", storage: 2, imagefile: "lil_ninja.webp"},
    {prodid: 3, title: "Master Wu", category: "Ninjago", price: "109", storage: 3, imagefile: "master_wu.webp"},
    {prodid: 4, title: "Scuba Kai", category: "Ninjago", price: "89", storage: 7, imagefile: "scuba_kai.webp"},
    {prodid: 5, title: "The Mechanic", category: "Ninjago", price: "99", storage: 3, imagefile: "the_mechanic.webp"},
    {prodid: 6, title: "Vengestone Warrior", category: "Ninjago", price: "89", storage: 4, imagefile: "vengestone_warrior.webp"}
]

let title = "";
let price = 0;
let id = 0;

let productArticle = "";

//products.map(
  //  (item) => { title += `<h3>${item.title}</h3>`});
    //console.log(title);

    //<img src="images/PROD_dragon_zane.webp" alt="produktbilde av Zane">-->

products.map(
    (prod, index) => productArticle +=

    `<article>
        <img src="images/${prod.imagefile}" alt="produktbilde av ${prod.title}">
        <a href="ninjago.html">${prod.category}</a>
        <h3 class="title">${prod.title}</h3>
        <span class="price">Kr ${Number(prod.price)},-</span>
        <button onClick="addToCart(${prod.title}, ${Number(prod.price)})">Legg i handlekurv</button>
    </article>`);

console.log(products[0].price);
//console.log(productArticle);
//title = products[1].title;
//console.log(title);

document.querySelector(".product-card").innerHTML = productArticle;
 //document.querySelector(".title").innerHTML = title;
//document.querySelector(".price").innerHTML = price;

/*
 * HANDLEVOGN:
 * Informasjon som bør lagres i handlevogn er
 * prodid: id som henviser til et produkt i products-arrayen
 *     - bruk prodid som referanse for å hente tittel og pris
 * quantity: antall produkter lagt i handlekurven
 */
//let cart = []