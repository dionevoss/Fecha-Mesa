'use strict'

const Post = use('App/Models/Post')
const PostServices = use('App/Services/PostServices')
const Database = use('Database')

class PostController {

    async index() {
        return await Database
            .table('users')
            .innerJoin('posts', 'users.id', 'posts.user_id')
            .orderBy('posts.id', 'DESC')
    }

    async store({ auth, request, response }) {
        try {
            const user = auth.user.id
            const postData = request.only(['text'])

            await PostServices.createPost({ user_id: user, ...postData })
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

    async update({ params, auth, response, request }) {
        const post = await Post.findOrFail(params.id)

        if(post.user_id !== auth.user.id){
          return response.status(401).send()
        }

        try {
            const postData = request.only(['text'])
            console.log(postData)
            post.merge(postData)
            await post.save()
        
            response.status(200).send(post)
        } catch (error) {
            response.status(400).send({ message: 'Ocorreu um erro' })
        }
    }

    async destroy() {

    }
}

module.exports = PostController
