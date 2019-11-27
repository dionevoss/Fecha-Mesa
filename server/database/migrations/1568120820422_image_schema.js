'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ImageSchema extends Schema {
  up () {
    this.create('images', (table) => {
      table.increments()
      table.string('path', 255).notNullable()
      table.integer('size').unsigned()
      table.string('original_name', 100)
      table.string('extension', 10)
      table.integer('user_id').unsigned()
      table.timestamps()

      table.foreign('user_id').references('id').inTable('users').onDelete('cascade')
    })
  }

  down () {
    this.drop('images')
  }
}

module.exports = ImageSchema
