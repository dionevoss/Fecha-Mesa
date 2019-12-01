import React, { useState } from 'react'
import {InputStyled, MainStyled, ImageStyled, PhotoCameraStyled} from './styled'
import {ButtonStyle} from './../../themes/styled'
import Paper from '@material-ui/core/Paper'
import IconButton from '@material-ui/core/IconButton'

import api from '../../services/api'

export default () => {
    const [file, setFile] = useState(null)

    const uploadImage = async () => {
        let formData = new FormData()
        formData.append('images', file)

        try {
            await api.post('/images', formData, {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Paper>
            <ImageStyled>
                <input onChange={(e) => setFile(e.target.files[0])}
                id="icon-button-file"
                type="file" 
                name="images"
                />
                <label htmlFor="icon-button-file">
                    <IconButton  color="primary" aria-label="upload picture" component="span">
                        <PhotoCameraStyled />
                    </IconButton>
                </label>
            </ImageStyled>
            <ButtonStyle onClick={uploadImage} variant="contained" color="primary" width='300'>
                    upload
            </ButtonStyle>

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