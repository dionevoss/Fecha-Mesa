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

Route.post('/users', 'UserController.create');
Route.get('/users/:id', 'UserController.getId');
Route.get('/users', 'UserController.getAll');
Route.put('/users/:id', 'UserController.updateUser')
Route.delete('/users/:id', 'UserController.deleteUser')

Route.post("/auth", "AuthController.login");
Route.put("/auth", "AuthController.updateToken")
Route.post("/logout", "AuthController.logout")

Route.get('/post', 'PostController.getAllPosts').middleware('auth');