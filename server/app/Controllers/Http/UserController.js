'use strict'

const UserServices = use('App/Services/UserServices')
const User = use('App/Models/User')
const Mail = use('Mail')
const Database = use('Database')

class UserController {
    
    async index() {
        return await User.all();
    }

    async store({ request, response }) {
        try {
            const userData = request.only(['username', 'first_name', 'last_name', 'email', 'password']);

            const user = await UserServices.createUser(userData)
            
            /*
            await Mail.send('emails.welcome', { userData }, (message) => {
                message
                    .to(user.email)
                    .from('no-reply@fechamesa.com')
                    .subject('Bem vindo')
            })
            */

            response.status(201).send({ message: 'Regitrado com sucesso!' })
        } catch (error) {
            console.log(error)
            if (error.errno === 19)
                response.status(400).send('Deu erro');
            else
                response.status(400).send(error);
        }
    }

    async show({ auth, response }) {
        try {
            const {id} = auth.user
            const user = await User.findOrFail(id)
            
            await user.load('images')
            return user;
        } catch (error) {
            response.status(400).send({ message: 'erro'});
        }
    }

    async update({auth, request, response } ) {
        const { id } = auth.user
        const user = await User.findOrFail(id)

        if(user.id !== auth.user.id)
            return response.status(401).send()

        const userData = request.only(['username', 'first_name', 'last_name', 'email', 'password']);

        user.merge(userData);
        await user.save();

        response.status(200).send(user);
    }

    async destroy({ params: { id }, auth, response } ) {
        const user = await User.findOrFail(id);

        if(user.id !== auth.user.id)
            return response.status(401).send()

        try {
            await user.delete();

            response.status(200).send({ message: 'Usuario excluido com sucesso.' })
        } catch (error) {
            response.status(400).send({ message: 'Não foi possivel deletar usuario.' });
        }
    }
}

module.exports = UserController;
