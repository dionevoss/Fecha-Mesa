'use strict'

const GroupServices = use('App/Services/GroupServices')
const User = use('App/Models/User')
const Group = use('App/Models/Group')

class GroupController {

  async index() {
    return await Group.all()
  }

  async create ({ auth, request, response }) {
    try {
      const groupData = request.only(['name'])
      const { id } = auth.user
  
      console.log(groupData)
      await Group.create({ ...groupData, user_id: id })
      response.status(201).send({ message: 'Grupo criado com sucesso!' })
    } catch (error) {
      if (error.errno === 19)
        return response.status(400).send({ message: 'Esse grupo já existe.'})
      response.status(400).send({ message: 'Ocorreu um erro.' })
    }
  }

  async store ({ request, response }) {
  }

  async show ({ params: { id }, response }) {
    try {
      const group = await Group.findOrFail(id)

      return response.status(200).send(group)
    } catch (error) {
      response.status(400).send({ message: 'Ocorreu um erro'})
    }
  }

  async edit ({ auth, request, response }) {
  }

  async update ({ params: { id }, request, response }) {
    const group = await Group.findOrFail(id)

    const groupData = request.only(['description'])

    group.merge(groupData)
    await group.save()

    response.status(200).send(group)
  }

  async destroy ({ params: { id }, request, response }) {
    try {
      const group = await Group.findOrFail(id)

      await group.delete()
      response.status(200).send({ message: 'Grupo excluido!'})
    } catch (error) {
      console.log(error)
      response.status(400).send({ message: 'Ocorreu um erro.' })
    }
  }
}

module.exports = GroupController
