import ProductsController from "./controllers/products.controller.js";


/******************************************burger menu */

let cheeseburgerButton = document.querySelector(".button_menu");
let menu = document.querySelector(".menu_menu");

cheeseburgerButton.addEventListener("click", () => {
  menu.classList.toggle("active");
  cheeseburgerButton.classList.toggle("active");
});


/********************************************Get HTML from Controller*************************************/


const getData = async () => {

    let productsData = await ProductsController.getAllProductsData();
    const productsHTML = await ProductsController.formHTML(productsData);
    const main = document.querySelector(".main");
    main.innerHTML = productsHTML;

    /*********************************************Hover Effects***************************/


    const images = document.querySelectorAll(".product_img")

    images.forEach( (mayo) => {
        mayo.addEventListener( "mouseover", (event) => {
            event.target.parentElement.parentElement.children[0].classList.add("active");
        })

        mayo.addEventListener( "mouseout", (event) => {
            event.target.parentElement.parentElement.children[0].classList.remove("active");
        })
    })
}

getData();                                  // call the above defined function getData.


