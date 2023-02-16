import $apiAuth from "../http/auth";

export default class OrderService {
    static async createOrder() {
        return $apiAuth.get('/createOrder')
    }

}