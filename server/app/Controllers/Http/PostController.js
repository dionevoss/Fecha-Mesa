'use strict'

const Post = use('App/Models/Post')
const PostServices = use('App/Services/PostServices')
const Database = use('Database')

class PostController {

    async index() {
        return await Database
            .table('posts')
            .innerJoin('users', 'posts.user_id', 'users.id')
            .orderBy('id', 'DESC')
    }

    async store({ auth, request, response }) {
        try {
            const { id } = auth.user
            const postData = request.only(['text'])

            await PostServices.createPost({ user_id: id, ...postData })
            response.status(201).send({ message: 'Post Criado com sucesso!' })
        } catch (error) {
            response.status(400).send({ message: 'Ocorreu um erro ao criar post'})
        }
    }

    async show({ params: { id }, request, response }) {
        try {
            const post = await Post.findOrFail(id)
        
            response.status(200).send(post)
        } catch (error) {
            response.status(400).send({ message: 'Ocorreu um erro!' })
        }
    }

    async update() {

    }

    async destroy() {

    }
}

module.exports = PostController
