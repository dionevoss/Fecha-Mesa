'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MembersSchema extends Schema {
  up () {
    this.create('members', (table) => {
      table.increments()
      table.integer('group_id').unsigned()
      table.integer('user_id').unsigned()
      table.timestamps()

      table.foreign('group_id').references('id').inTable('groups').onDelete('cascade')
      table.foreign('user_id').references('id').inTable('users').onDelete('cascade')
    })
  }

  down () {
    this.drop('members')
  }
}

module.exports = MembersSchema
