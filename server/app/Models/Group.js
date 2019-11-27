'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Group extends Model {
    user () {
        return this.belongsTo('App/Models/User')
    }

    members () {
        return this.hasMany('App/Models/Member')
    }

    images () {
        return this.hasOne('App/Models/Image')
    }
}

module.exports = Group
