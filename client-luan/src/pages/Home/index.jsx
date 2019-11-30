import React from 'react'
import { Redirect } from 'react-router-dom'
import User from '../../components/User'
import Menu from '../../components/Menu'
import { isAuthenticated } from '../../services/auth'

export default () => {

    if (!isAuthenticated()){
        return <Redirect to='/login' />
    }

    document.body.style.background = 'white'

    return (
        <div className='main'>
            <User />
            <Menu />
        </div>
    )
}