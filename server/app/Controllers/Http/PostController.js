'use strict'

const Post = use('App/Models/Post')
const PostServices = use('App/Services/PostServices')

class PostController {

    async index() {
        return await Post.all()
    }

    async create({ auth, request, response }) {
        try {
            const { id } = auth.user
            const postData = request.only(['text'])

            await PostServices.createPost({ ...postData, user_id: id })
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