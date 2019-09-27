'use strict'

const AuthService = use("App/Services/AuthServices")


class AuthController {
    async login({ request, auth }) {
        const { email, pass } = request.all()
        return AuthService.login(email, pass, auth);
    }

    async updateToken({ request, auth }) {
        const { refreshToken } = request.all();

        return await AuthService.updateToken(refreshToken, auth)
    }
}

module.exports = AuthController
