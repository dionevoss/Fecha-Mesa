import React from 'react'
import {InputStyled, MainStyled, ImageStyled, PhotoCameraStyled} from './styled'
import {ButtonStyle} from './../../themes/styled'
import Paper from '@material-ui/core/Paper'
import IconButton from '@material-ui/core/IconButton'

export default () => {
    return (
        <Paper>

            <ImageStyled>
                <input accept="image/*" id="icon-button-file" type="file" />
                <label htmlFor="icon-button-file">
                    <IconButton color="primary" aria-label="upload picture" component="span">
                        <PhotoCameraStyled />
                    </IconButton>
                </label>
            </ImageStyled>

            <MainStyled>
                <h2>Nome e E-mail</h2>
                <InputStyled label='Nome' />
                <InputStyled label='Sobre-nome' />
                <InputStyled label='E-mail' />
                <ButtonStyle variant="contained" color="primary" width='300'>
                    Alterar
                </ButtonStyle>
            </MainStyled>

            <hr />

            <MainStyled>
                <h2>Senha</h2>
                <InputStyled label='Senha atual' />
                <InputStyled label='Nova senha' />
                <InputStyled label='Confirme a senha' />
                <ButtonStyle variant="contained" color="primary" width='300'>
                    Alterar
                </ButtonStyle>
            </MainStyled>
        </Paper>
    )
}