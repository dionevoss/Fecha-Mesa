'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EventSchema extends Schema {
  up () {
    this.create('events', (table) => {
      table.increments()
      table.integer('user_id').unsigned()
      table.string('title', 200)
      table.dateTime('start_at')
      table.dateTime('end_at')
      table.text('description')
      table.timestamps()

      table.foreign('user_id').references('id').inTable('users').onDelete('cascade')
    })
  }

  down () {
    this.drop('events')
  }
}

module.exports = EventSchema
