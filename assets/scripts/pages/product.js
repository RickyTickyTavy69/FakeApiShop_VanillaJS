import ProductsController from "../controllers/products.controller.js";

const getData = async () => {

    let query = window.location.href.split("?")[1];
    const productData = await ProductsController.getOneProductData(query);
    const productHTML = await ProductsController.formHTML(productData);

    const main = document.querySelector(".main");
    main.innerHTML = productHTML;

    const backButton = document.querySelector(".back");

    backButton.addEventListener("click", () => {
        let host = location.host.split(":")[0];
        let url = (host === "localhost")? `/The_design_shop/index.html`: `/Fake_API_SHOP`; // der Script soll unterscheiden ob ich auf dem localhost oder pages bin.
        location.replace(url);
    })
}

getData()