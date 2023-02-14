import $apiAuth from "../http/auth";
import $apiProducts from "../http/producs";

export default class AdditivesService {
    static createOrder() {
        return $apiAuth.get('/createOrder')
    }
    static getAdditives(category){
        return $apiProducts.get(`/additives?category=${category}`)
    }
}