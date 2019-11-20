'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class GroupSchema extends Schema {
  up () {
    this.create('groups', (table) => {
      table.increments()
      table.string('name', 80).notNullable().unique()
      table.text('description')
      table.integer('user_id').unsigned()
      table.integer('image_id').unsigned()
      table.timestamps()

      table.foreign('user_id').references('id').inTable('users').onDelete('cascade')
      table.foreign('image_id').references('id').inTable('image').onDelete('cascade')
    })
  }

  down () {
    this.drop('groups')
  }
}

module.exports = GroupSchema
