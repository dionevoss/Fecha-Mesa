'use strict'

const UserServices = use('App/Services/UserServices')
const User = use('App/Models/User')

class UserController {
    async create({ request, response }) {
        try {
            const userData = request.only(['first_name', 'last_name', 'email', 'password']);

            return await UserServices.createUser(userData);
        } catch (error) {
            if (error.errno === 19)
                response.status(400).send("E-mail já cadastrado.");
            else
                response.status(400).send(error);
        }
    }

    async show({ params: { id }, response }) {
        try {
            return await UserServices.GetId({ id: id });
        } catch (error) {
            response.status(400).send(error);
        }
    }

    async index() {
        return await User.all();
    }

    async update({ params: { id }, request, response } ) {
        const user = await User.find(id);

        if(!user)
            return 'ID não encontrado.';

        const userData = request.only(['first_name', 'last_name', 'email', 'password']);

        user.merge(userData);
        await user.save();

        response.status(200).send(user);
    }

    async destroy({ params: { id }, response } ) {
        const user = await User.findOrFail(id);
        
        if(!user)
            return 'ID não encontrado.';

        try {
            await user.delete();

            response.status(200).send({ message: 'Usuario excluido com sucesso.' })
        } catch (error) {
            response.status(400).send({ message: 'Não foi possivel deletar usuario.' });
        }
    }
}

module.exports = UserController;
