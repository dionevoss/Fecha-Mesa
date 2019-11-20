'use strict'

const Post = use('App/Models/Post')

class PostServices {
    async createPost(post) {
        if(!post)
            throw 'Insira o corpo da mensagem'
        
            return await Post.create(post)
    }

}

module.exports = new PostServices()