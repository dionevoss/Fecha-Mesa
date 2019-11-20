'use strict'

const Image = use('App/Models/Image')
const { imageUpload } = use('App/Helpers')
const Helpers = use('Helpers')
const fs = use('fs')

class ImageController {
    async index({ response }) {
        
        const images = await Image.query().orderBy('id', 'DESC').paginate()

        return response.send(images)
    }

    async store({ auth, request, response }) {
        try {
            const { id } = auth.user
            const fileJar = request.file('images', {
                types: ['image'],
                size: '5mb'
            })

            if (!fileJar.files) {
                const file = await imageUpload(fileJar)
                if (file.moved()) {
                    const image = await Image.create({
                        path: file.fileName,
                        size: file.size,
                        user_id: id,
                        original_name: file.clientName,
                        extension: file.subtype
                    })


                    return response.status(201).send({ image })
                }
            }

            return response.status(400).send({ message: 'Não foi possivel enviar essa imagem!' })
        } catch (error) {
                console.log(error)
            return response.status(400).send({ message: 'erro no upload' })
        }
    }

    async show({ params, response }) {
        return response.download(Helpers.publicPath(`uploads/${params.path}`))
    }

    async update({ params: { id }, response, request }) {
        const image = await Image.findOrFail(id)

        try {
            image.merge(request.only(['original_name']))
            await image.save()

            response.status(200).send(image)
        } catch (error) {
            return response.status(400).send({ message: 'Não foi possivel atualizar essa imagem!' })
        }
    }

    async destroy({ params: { id }, response }) {
        const image = await Image.findOrFail(id)

        try {
            let filepath = Helpers.publicPath(`uploads/${image.path}`)
            await fs.unlink(filepath, err => {
                if (!err)
                    image.delete()
            })

            return response.status(204).send()
        } catch (error) {
            return response.status(400).send({ message: 'Não foi possivel deletar a imagem!' })
        }
    }
}

module.exports = ImageController
