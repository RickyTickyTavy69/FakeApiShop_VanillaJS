import ProductsService from "../service/products.service.js";
export default class ProductsController{

    static async getAllProductsData(){
       const data = await ProductsService.getProducts();
       return data;
    }

    static async getOneProductData(query){
        const data = await ProductsService.getProducts(query);
        return data;
    }

    static formHTML(data, query){
        console.log("length", data.length);

        if(data.length){

            let dataHTML = data.map((hamburger, pommes) => {

                if(pommes === 0 || pommes === 7 || pommes === 14) {

                    return `<article class="product_container main_container">
                     <p class="hover_image">See this fake product</p>
                     <a href="./assets/pages/product.html?${pommes + 1}">
                        <img
                        class="product_img"
                        src="${hamburger.image}"
                        alt="backPack"
                        />
                     </a>
                     <div class="price_name">
                        <p class="title">Fake ${hamburger.title}</p>
                        <p class="price">${hamburger.price}€</p>
                     </div>
                   </article>`

                } else{
                    return`
          <article class="product_container small_container">
                    <p class="hover_image">See this fake product</p>
                    <a href="./assets/pages/product.html?${pommes + 1}">
                        <img
                        class="product_img"
                        src= "${hamburger.image}"
                        alt="backPack"                       
                     />
                    </a>
                     <div class="price_name">
                        <p class="title">Fake ${hamburger.title}</p>
                        <p class="price">${hamburger.price} €</p>
                     </div>
          </article>`}
            })

            return dataHTML.join("");

        } else{
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
                        <button class="info">was ist das</button>
                        <button class="buy">kaufen</button>
                     </div>
                      <div class="button_container">
                        <button class="back">zurück zum shop</button>
                      </div>
                      <div class="info_block">
                        <p>
                        Unglaublich!!! Das ist unserer neuer ${data.title} von bester Qualität!
                        Wunderschön und einzigartig, für Sie extra für nur ${data.price} €.
                        Greifen Sie jetzt zu, Das Angebot ist limitiert! 
                        </p>
                      </div>
                      <div class="buy_block">
                        <p>
                        Unglaublich!!! Unserer neuer ${data.title} von bester Qualität ist 
                        leider ausverkauft! Wunderschön und einzigartig, aber nicht mehr da :(...
                        Hätten Sie früher zugreifen müssen, tja...
                        </p>
                      </div>
                   </article>`

            return dataHTML;
        }
    }
}