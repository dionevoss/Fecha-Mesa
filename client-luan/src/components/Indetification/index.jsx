import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Login from './../../pages/Login/index'
import Register from './../../pages/Register/index'

export default () => {
    return  (
        <Switch> 
            <Route exact path='/login' component={Login} />
            <Route exact path='/login/register' component={Register} />
        </Switch>
    )
}