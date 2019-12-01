import React, {useState} from 'react'
import {Redirect} from 'react-router-dom'
import {Paper} from '@material-ui/core'
import {EditeFormStyle, ButtonStyle, SpacingStyle} from './../../themes/styled'
import { logout } from '../../services/auth';

export default () => {
    const [isExit, setIsExit] = useState(false)

    if(isExit) {
        logout()
        return <Redirect to='/login' />
    }

    return (
        <Paper>
            <SpacingStyle padding='20' />
            <EditeFormStyle>
                <div>
                    <h2>Deseja mesmo sair da sua conta ?</h2>
                    <ButtonStyle variant="contained" color="primary" widthP="100" onClick={() => setIsExit(!isExit)}>
                        Sim
                    </ButtonStyle>
                </div>
            </EditeFormStyle>
            <SpacingStyle padding='20' />
        </Paper>
    )
}