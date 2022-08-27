
/******************************************burger menu */

let cheeseburgerButton = document.querySelector(".button_menu");
let menu = document.querySelector(".menu_menu");

cheeseburgerButton.addEventListener("click", () => {
  menu.classList.toggle("active");
  cheeseburgerButton.classList.toggle("active");
});


/********************************************API_Request*************************************/


const getData = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();


  let dataHTML = data.map((hamburger, pommes) => {

      if(pommes === 0 || pommes === 7 || pommes === 14) {

          return `<article class="product_container main_container">
                     <p class="hover_image">See this fake product</p>
                     <a href="./assets/pages/product.html?${pommes}">go to html</a>
                     <img
                        class="product_img"
                        src="${hamburger.image}"
                        alt="backPack"
                        data-product-number = "${pommes}"
                     />
                     <div class="price_name">
                        <p class="title">Fake ${hamburger.title}</p>
                        <p class="price">${hamburger.price}€</p>
                     </div>
                   </article>`

      } else{
          return`
          <article class="product_container small_container">
                    <p class="hover_image">See this fake product</p>
                    <a href="./assets/pages/product.html?${pommes}">go to html</a>
                     <img
                        class="product_img"
                        src= "${hamburger.image}"
                        alt="backPack"
                        data-product-number = "${pommes}"
                     />
                     <div class="price_name">
                        <p class="title">Fake ${hamburger.title}</p>
                        <p class="price">${hamburger.price} €</p>
                     </div>
          </article>`}
  })


    const main = document.querySelector(".main");
    main.innerHTML = dataHTML.join("")

    /*********************************************Add Links to the Products***************************/


    const images = document.querySelectorAll(".product_img")


    images.forEach((ketchup) => {
        ketchup.addEventListener("click", (event) => {

            let query = event.target.dataset.productNumber;
            location.replace(`/The_design_shop/assets/pages/product.html?${query}`);
        })
    })

    images.forEach( (mayo) => {
        mayo.addEventListener( "mouseover", (event) => {
            event.target.parentElement.children[0].classList.add("active");
        })

        mayo.addEventListener( "mouseout", (event) => {
            event.target.parentElement.children[0].classList.remove("active");

        })
    })
}

getData();



/************************************************Links_Redirect****************************************/
