'use strict'

const AuthServices = use('App/Services/AuthServices')


class AuthController {
    async login({ request, auth }) {
        const { email, pass } = request.all()
        return AuthServices.login(email, pass, auth);
    }

    async updateToken({ request, auth }) {
        const { refreshToken } = request.all();

        return await AuthServices.updateToken(refreshToken, auth)
    }
}

module.exports = AuthController
