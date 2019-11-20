'use strict'

const Group = use('App/Models/Group')

class GroupServices {
    async createGroup(group) {
        if (!group.name)
            throw "Insira o nome do grupo";
            
        return await Group.create(group)
    }

    
}







module.exports = new GroupServices()