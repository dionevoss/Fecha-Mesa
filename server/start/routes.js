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

Route.group(() => {
    Route.resource('users', 'UserController')
        .apiOnly()
        .except(['index'])
        .middleware(new Map([
            [['update', 'destroy'],['auth']]
        ]))
});
Route.get('/users', 'UserController.show')

Route.group(() => {
    Route.resource('groups', 'GroupController')
        .apiOnly()
}).middleware('auth');

Route.group(() => {
    Route.resource('posts', 'PostController')
        .apiOnly()
        .except(['update'])
})
Route.put('/posts/:id', 'PostController.update')

Route.get('/images', 'ImageController.index')
Route.post('/images', 'ImageController.store')
Route.put('/images', 'ImageController.update').middleware('auth')
Route.get('/images/:path', 'ImageController.show')

Route.post("/auth", "AuthController.login")
Route.put("/auth", "AuthController.updateToken")
Route.get('/auth', 'AuthController.GetUser')



Route.post('/groups/:id/members', 'MemberController.store')
Route.get('/members', 'MemberController.index')
Route.get('/members/:id', 'MemberController.show')