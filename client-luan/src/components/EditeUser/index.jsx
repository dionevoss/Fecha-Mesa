import React, { useState } from 'react'
import {InputStyled, MainStyled, ImageStyled, PhotoCameraStyled} from './styled'
import {ButtonStyle} from './../../themes/styled'
import Paper from '@material-ui/core/Paper'
import IconButton from '@material-ui/core/IconButton'

import api from '../../services/api'

export default () => {
    const [file, setFile] = useState(null)
    const [name, setName] = useState(undefined)
    const [lastName, setLastName] = useState(undefined)
    const [email, setEmail] = useState(undefined)
    const [oldPassword, setOldPassword] = useState([])
    const [newPassword1, setNewPassword1] = useState([])
    const [newPassword2, setNewPassword2] = useState([])

    const updateUser = async () => {
        console.log(name)
        try {
            await api.put('/users', {first_name: name, last_name: lastName, email})
        } catch (error) {
            console.log(error)
        }
    }

    const updatePassword = async () => {
        try {
            await api.put('/users', {password: newPassword1})
        } catch (error) {
            
        }
    }

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
                <InputStyled value={name} onChange={(e) => setName(e.target.value)} label='Nome' />
                <InputStyled value={lastName} onChange={(e) => setLastName(e.target.value)} label='Sobrenome' />
                <InputStyled value={email} onChange={(e) => setEmail(e.target.value)} label='E-mail' />
                <ButtonStyle onClick={updateUser} variant="contained" color="primary" width='300'>
                    Alterar
                </ButtonStyle>
            </MainStyled>

            <hr />

            <MainStyled>
                <h2>Senha</h2>
                <InputStyled value={oldPassword} onChange={(e) => setOldPassword(e.target.value)} label='Senha atual' />
                <InputStyled value={newPassword1} onChange={(e) => setNewPassword1(e.target.value)} label='Nova senha' />
                <InputStyled value={newPassword2} onChange={(e) => setNewPassword2(e.target.value)} label='Confirme a senha' />
                <ButtonStyle onClick={updatePassword} variant="contained" color="primary" width='300'>
                    Alterar
                </ButtonStyle>
            </MainStyled>
        </Paper>
    )
}