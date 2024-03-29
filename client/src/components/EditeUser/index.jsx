import React, { useState, useEffect } from 'react'
import {InputStyled, MainStyled, ImageStyled, PhotoCameraStyled, AlignStyled} from './styled'
import {ButtonStyle} from './../../themes/styled'
import Paper from '@material-ui/core/Paper'
import IconButton from '@material-ui/core/IconButton'

import api from '../../services/api'

export default () => {
    const [file, setFile] = useState(null)
    const [name, setName] = useState(undefined)
    const [lastName, setLastName] = useState(undefined)
    const [email, setEmail] = useState(undefined)
    const [newPassword1, setNewPassword1] = useState('')
    const [newPassword2, setNewPassword2] = useState('')
    const [isError, setIsError] = useState(false)

    const fetchData = async () => {
        await api
            .get(`/users`)
            .then(result =>{
                setName(result.data.first_name)
                setLastName(result.data.last_name)
                setEmail(result.data.email)
            } )
    }

    const updateUser = async () => {
        console.log(name)
        try {
            await api.put('/users', {first_name: name, last_name: lastName, email})
            alert('Informações do usuário atualizadas com sucesso')
            window.location.reload(true)
        } catch (error) {
            console.log(error)
        }
    }

    const updatePassword = async () => {
        try {
            await api.put('/users', {password: newPassword1})
            setIsError(false)
            alert('Senha alterada com sucesso')
            window.location.reload(true)
        } catch (error) {
            console.log(error)
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
            alert('Upload feito com sucesso!')
            window.location.reload(true)
        } catch (error) {
            console.log(error)
        }
    }

    const passwordVerification = () => {
        const lenght = newPassword1.split('').length

        if(lenght < 8 || newPassword1 !== newPassword2) {
            setIsError(true)
            return
        }

        updatePassword()
    }

    useEffect(() => {
        fetchData()
    }, [])

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

            <AlignStyled>
                <ButtonStyle onClick={() => uploadImage()} variant="contained" color="primary" width='300'>
                    upload
                </ButtonStyle>
            </AlignStyled>

            <MainStyled>
                <h2>Nome e E-mail</h2>
                <InputStyled value={name} onChange={(e) => setName(e.target.value)} label='Nome' />
                <InputStyled value={lastName} onChange={(e) => setLastName(e.target.value)} label='Sobrenome' />
                <InputStyled value={email} onChange={(e) => setEmail(e.target.value)} label='E-mail' />
                <ButtonStyle onClick={() => updateUser()} variant="contained" color="primary" width='300'>
                    Alterar
                </ButtonStyle>
            </MainStyled>

            <hr />

            <MainStyled>
                <h2>Senha</h2>
                <InputStyled error={isError} type='password' value={newPassword1} onChange={(e) => setNewPassword1(e.target.value)} label='Nova senha' />
                <InputStyled error={isError} type='password' value={newPassword2} onChange={(e) => setNewPassword2(e.target.value)} label='Confirme a senha' />
                <ButtonStyle onClick={() => passwordVerification()} variant="contained" color="primary" width='300'>
                    Alterar
                </ButtonStyle>
            </MainStyled>
        </Paper>
    )
}