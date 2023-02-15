import $apiAuth from "../http/auth";

export default class AuthService {
    static async login(login, password) {
        return $apiAuth.post('/login', {login, password})
    }

    static async registration(login, password) {
        return $apiAuth.post('/registration', {login, password})
    }

    static async logout() {
        return $apiAuth.get('/logout')
    }
}