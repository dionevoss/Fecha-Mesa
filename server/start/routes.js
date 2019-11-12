'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')

Route.post('/users', 'UserController.create')
Route.get('/users/:id', 'UserController.show')
Route.get('/users', 'UserController.getAll')
Route.put('/users/:id', 'UserController.update')
Route.delete('/users/:id', 'UserController.destroy')

Route.post('/groups', 'GroupController.create')
Route.get('/groups/:id', 'GroupController.show')
Route.get('/groups', 'GroupController.getAll')
Route.put('/groups', 'GroupController.update')
Route.delete('/groups/:id', 'GroupController.destroy')

Route.post('/images', 'ImageController.store')
Route.get('/images/:id', 'ImageController.show')
Route.delete('/images/:id', 'ImageController.destroy')

Route.post("/auth", "AuthController.login")
Route.put("/auth", "AuthController.updateToken")
Route.post("/logout", "AuthController.logout")

Route.get('/post', 'PostController.getAllPosts')