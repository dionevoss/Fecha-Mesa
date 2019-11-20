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

Route.get('/users', 'UserController.index')
Route.post('/users', 'UserController.create')
Route.get('/users/:id', 'UserController.show')
Route.put('/users/:id', 'UserController.update')
Route.delete('/users/:id', 'UserController.destroy')

Route.get('/groups', 'GroupController.index')
Route.post('/users/:id/groups', 'GroupController.create')
Route.get('/groups/:id', 'GroupController.show')
Route.put('/users/:id/groups/:id', 'GroupController.update')
Route.delete('/users/:id/groups/:id', 'GroupController.destroy')

Route.get('/posts', 'PostController.index')
Route.post('/users/:id/posts', 'PostController.create')
Route.get('/posts/:id', 'PostController.show')

Route.get('/images', 'ImageController.index')
Route.post('/users/:id/images', 'ImageController.store')
Route.get('/images/:path', 'ImageController.show')
Route.put('/users/:id/images/:id', 'ImageController.update')
Route.delete('/users/:id/images/:id', 'ImageController.destroy')

Route.post("/auth", "AuthController.login")
Route.put("/auth", "AuthController.updateToken")
Route.post("/logout", "AuthController.logout")