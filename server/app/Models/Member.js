'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Member extends Model {
    user () {
        return this.hasMany('App/Models/User')
    }

    groups () {
        return this.belongsTo('App/Models/Group')
    }
}

module.exports = Member
