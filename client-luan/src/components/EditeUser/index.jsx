import React from 'react'
import {InputStyled, MainStyled} from './styled'
import Paper from '@material-ui/core/Paper'

export default () => {
    return (
        <Paper>
            <MainStyled>
                Altera Nome ou E-mail
                <InputStyled label='Nome' />
                <InputStyled label='Sobre-nome' />
                <InputStyled label='E-mail' />
            </MainStyled>

            <MainStyled>
                Senha
                <InputStyled label='Senha atual' />
                <InputStyled label='Nova senha' />
                <InputStyled label='Confirme a senha' />
            </MainStyled>
        </Paper>
    )
}