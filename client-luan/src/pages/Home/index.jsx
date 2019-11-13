import React from 'react'
import User from '../../components/User'
import Menu from '../../components/Menu'

{/* 
    infoUser 
    Menu {
        grupos
        editar perfil
    }
*/}

export default () => {
    document.body.style.background = 'white'

    return (
        <div className='main'>
            <User />
            <Menu />
        </div>
    )
}