import $apiProducts from "../http/producs";

export default class ProductsService {
    static async getProducts () {
        return $apiProducts.get('/products')
    }

    static async getAdditives() {
        return $apiProducts.get('/additives')
    }

}