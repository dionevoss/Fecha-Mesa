'use strict'

const GroupServices = use('App/Services/GroupServices')
const User = use('App/Models/User')
const Group = use('App/Models/Group')

class GroupController {

  async index() {
    return await Group.all()
  }

  async store ({ auth, request, response }) {
    try {
      const groupData = request.only(['name', 'description'])

      await Group.create({ user_id: auth.user.id, ...groupData })
      response.status(201).send({ message: 'Grupo criado com sucesso!' })
    } catch (error) {
      if (error.errno === 19)
        return response.status(400).send({ message: 'Esse grupo já existe.'})
      response.status(400).send({ message: 'Ocorreu um erro.' })
    }
  }

  async show ({ params: { id }, response }) {
    try {
      const group = await Group.findOrFail(id)
      
      await group.load('members')
      return group;
    } catch (error) {
      response.status(400).send({ message: 'Ocorreu um erro.'})
    }
  }

  async update ({ params: { id }, auth, request, response }) {
    const group = await Group.findOrFail(id)
    
    if(group.user_id != auth.user.id){
      return response.status(401).send()
    }

    const groupData = request.only(['description'])

    group.merge(groupData)
    await group.save()

    response.status(200).send(group)
  }

  async destroy ({ params: { id }, auth, response }) {
    try {
      const group = await Group.findOrFail(id)
      
      if(group.user_id != auth.user.id){
        return response.status(401).send()
      }

      await group.delete()
      response.status(200).send({ message: 'Grupo excluido!'})
    } catch (error) {
      response.status(400).send({ message: 'Ocorreu um erro.' })
    }
  }
}

module.exports = GroupController
