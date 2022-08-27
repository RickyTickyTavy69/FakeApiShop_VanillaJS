
let query = window.location.href.split("?")[1];
query = (Number(query) + 1).toString();
let url = `https://fakestoreapi.com/products/${query}`



const getData = async () => {
    const response = await fetch(url, {method: "GET"});
    const data = await response.json();


    let dataHTML = `<article class="product_container main_container">
                     <img
                        class="product_img"
                        src="${data.image}"
                        alt="backPack"
                        data-product-number = "${query}"
                     />
                     <div class="price_name">
                        <p class="title">Fake ${data.title}</p>
                        <p class="price">${data.price}€</p>
                     </div>
                     <div class="product_buttons">
                        <button>was ist das</button>
                        <button>kaufen</button>
                     </div>
                      <div class="button_container">
                        <button class="back">zurück zum shop</button>
                      </div>
                   </article>`

    const main = document.querySelector(".main");
    main.innerHTML = dataHTML;

    const backButton = document.querySelector(".back");

    backButton.addEventListener("click", () => {
        location.replace(`/The_design_shop/index.html`);
    })

}
    /*********************************************Add Links to the Products***************************/



getData()