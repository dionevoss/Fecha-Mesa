'use strict'

const AuthServices = use('App/Services/AuthServices')


class AuthController {
    async login({ request, auth }) {
        const { email, password } = request.all()
        return AuthServices.login(email, password, auth);
    }

    async updateToken({ request, auth }) {
        const { refreshToken } = request.all();

        return await AuthServices.updateToken(refreshToken, auth)
    }
}

module.exports = AuthController
