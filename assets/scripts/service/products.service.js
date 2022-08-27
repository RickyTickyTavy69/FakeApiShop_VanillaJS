export default class ProductsService{

    static async getProducts(query = null){
        const url = query? `https://fakestoreapi.com/products/${query}`: "https://fakestoreapi.com/products";
        const response = await fetch(url, {method: "GET"});
        const data = await response.json();
        return data;
    }

}