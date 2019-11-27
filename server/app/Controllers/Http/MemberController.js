'use strict'

const Member = use('App/Models/Member')
const Group = use('App/Models/Group')
const Database = use('Database')

class MemberController {

    async index() {
        return await Database
            .table('members')
            .innerJoin('users', 'members.id', 'users.id')
    }

    async store({ request, response, params: { id } }) {
        const group = await Group.findOrFail(id)
        
        const user = await request.only(['user_id'])
        console.log(user)
        await Member.create({ user_id: user.user_id, group_id: group.id })

    }

}

module.exports = MemberController
