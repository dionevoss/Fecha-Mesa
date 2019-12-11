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

Route.get('/users', 'UserController.show')
Route.post('/users', 'UserController.store')
Route.put('/users', 'UserController.update')
Route.delete('/users', 'UserController.destroy')

Route.get('/posts', 'PostController.index')
Route.get('/posts/:id', 'PostController.show')
Route.post('/posts', 'PostController.store')
Route.delete('/posts/:id', 'PostController.destroy')
Route.put('/posts/:id', 'PostController.update')

Route.post('/images', 'ImageController.store')
Route.put('/images', 'ImageController.update').middleware('auth')
Route.get('/images/:path', 'ImageController.show')

Route.post("/auth", "AuthController.login")
Route.put("/auth", "AuthController.updateToken")
Route.get('/auth', 'AuthController.GetUser')