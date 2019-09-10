'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ImageSchema extends Schema {
  up () {
    this.create('images', (table) => {
      table.increments()
      table.integer('user_id').unsigned()
      table.integer('event_id').unsigned()
      table.integer('post_id').unsigned()
      table.string('path').notNullable()
      table.timestamps()

      table.foreign('user_id').references('id').inTable('users').onDelete('cascade')
      table.foreign('event_id').references('id').inTable('events').onDelete('cascade')
      table.foreign('post_id').references('id').inTable('posts').onDelete('cascade')
    })
  }

  down () {
    this.drop('images')
  }
}

module.exports = ImageSchema
