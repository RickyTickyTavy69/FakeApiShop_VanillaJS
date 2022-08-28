import ProductsController from "../controllers/products.controller.js";

const getData = async () => {

    let query = window.location.href.split("?")[1];
    const productData = await ProductsController.getOneProductData(query);
    const productHTML = await ProductsController.formHTML(productData);

    const main = document.querySelector(".main");
    main.innerHTML = productHTML;

    /**************************************************Buttons********************************************/

    const backButton = document.querySelector(".back");

    backButton.addEventListener("click", () => {
        let host = location.host.split(":")[0];
        let url = (host === "localhost")? `/The_design_shop/index.html`: `/Fake_API_SHOP`; // der Script soll unterscheiden ob ich auf dem localhost oder pages bin.
        location.replace(url);
    });

    const buttons = document.querySelector(".product_buttons");
    const infoBlock = document.querySelector(".info_block");
    const buyBlock = document.querySelector(".buy_block");
    buttons.addEventListener("click", (event) => {

        if(event.target.classList.contains("info")){
            buyBlock.classList.remove("active");
            infoBlock.classList.toggle("active");
            setTimeout(() => {
                infoBlock.classList.remove("active");
            }, 8000);
        } else if(event.target.classList.contains("buy")){
            infoBlock.classList.remove("active");
            buyBlock.classList.toggle("active");
            setTimeout(() => {
                buyBlock.classList.remove("active");
            }, 8000);
        }





    })

}

getData()