'use strict'

const UserServices = use('App/Services/UserServices')
const User = use('App/Models/User')

class UserController {
    async create({ request, response }) {
        try {
            const userData = request.only(['first_name', 'last_name', 'email', 'password']);

            return await UserServices.createUser(userData);
        } catch (error) {
            if (error.errno === 1062)
                response.status(400).send("Email ou username já cadastrado");
            else
                response.status(400).send(error);
        }
    }

    async getId({ params, response }) {
        try {
            return await UserServices.GetId({ id: params.id });
        } catch (error) {
            response.status(400).send(error);
        }
    }

    async getAll() {
        return await User.all();
    }

    async updateUser({ params: { id }, request, response } ) {
        const user = await User.find(id);

        if(!user)
            return 'ID não encontrado.';

        const userData = request.only(['first_name', 'last_name', 'email', 'password']);

        user.merge(userData);
        await user.save();

        response.status(200).send(user);
    }

    async deleteUser({ params: { id }, request, response } ) {
        const user = await User.findOrFail(id);

        try {
            await user.delete();

            response.status(200).send({ message: 'Usuario excluido com sucesso.' })
        } catch (error) {
            response.status(400).send({ message: 'Não foi possivel deletar usuario.' });
        }
    }
}

module.exports = UserController;
