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
                        <button>was ist das</button>
                        <button>kaufen</button>
                     </div>
                      <div class="button_container">
                        <button class="back">zurück zum shop</button>
                      </div>
                   </article>`

            return dataHTML;
        }
    }
}