'use strict'

const UserServices = use('App/Services/UserServices')
const User = use('App/Models/User')

class UserController {
    async create({ request, response }) {
        try {
            const userData = request.only(["username", "email", "password"]);

            return await UserServices.createUser(userData);
        } catch (error) {
            if (error.errno === 19)
                response.status(400).send("Email ou username já cadastrado");
            else
                response.status(400).send(error);
        }
    }
}

module.exports = UserController;
