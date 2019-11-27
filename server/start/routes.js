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
        .middleware(new Map([
            [['update', 'destroy'],['auth']]
        ]))
});

Route.group(() => {
    Route.resource('groups', 'GroupController')
        .apiOnly()
}).middleware('auth');

Route.group(() => {
    Route.resource('posts', 'PostController')
        .apiOnly()
        .except(['update'])
});

Route.group(() => {
    Route.resource('images', 'ImageController')
        .apiOnly()
        .except('show')
        .middleware(new Map([
            [['store', 'update', 'destroy'], ['auth']]
        ]))
})

Route.post('/friend/:id', 'FriendController')


Route.get('/images/:path', 'ImageController.show')

Route.post("/auth", "AuthController.login")
Route.put("/auth", "AuthController.updateToken")



Route.post('/groups/:id/members', 'MemberController.store')
Route.get('/members', 'MemberController.index')
Route.get('/members/:id', 'MemberController.show')