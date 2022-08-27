import ProductsController from "../controllers/products.controller.js";

const getData = async () => {

    let query = window.location.href.split("?")[1];
    const productData = await ProductsController.getOneProductData(query);
    const productHTML = await ProductsController.formHTML(productData);

    const main = document.querySelector(".main");
    main.innerHTML = productHTML;

    const backButton = document.querySelector(".back");

    backButton.addEventListener("click", () => {
        location.replace(`/The_design_shop/index.html`);
    })
}

getData()