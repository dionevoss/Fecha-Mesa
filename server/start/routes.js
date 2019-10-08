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
Route.get('/users/:id', 'UserController.getId').middleware('auth');
Route.get('/users', 'UserController.getAll').middleware('auth');
Route.put('/users/:id', 'UserController.updateUser').middleware('auth');
Route.delete('/users/:id', 'UserController.deleteUser').middleware('auth');

Route.post("/auth", "AuthController.login");
Route.put("/auth", "AuthController.updateToken")

Route.get('/post', 'PostController.getAllPosts').middleware('auth');