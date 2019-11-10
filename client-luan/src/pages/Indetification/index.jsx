import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Login from './../../components/Login/index'
import Register from './../../components/Register/index'

export default () => {
    return  (
        <Switch> 
            <Route exact path='/login' component={Login} />
            <Route exact path='/login/register' component={Register} />
        </Switch>
    )
}