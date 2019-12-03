import React, { useState } from 'react'
import {MainFormStyle, FormStyle, TextFormStyle, ButtonStyle, WarningStyle} from './../../themes/styled'
import {Link, Redirect} from 'react-router-dom'
import api from './../../services/api'

export default () => {
    const [username, setUsername] = useState('')
    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password1, setPassword1] = useState('')
    const [password2, setPassword2] = useState('')
    const [warning, setWarning] = useState('')
    const [isRegister, setIsRegister] = useState(false)

    const passwordVerification = async () => {
        const lenght = password1.split('').length

        if(lenght < 8) {
            setWarning('Senha deve ter no minimo 8 caracteres')
            return
        }

        if(password1 !== password2) {
            setWarning('As senhas não são iguais')
            return
        }
            console.log([username, name, lastName, email, password1])
        try{
            await api.post('/users', {username: username, first_name: name, last_name: lastName, email: email, password: password1})
            setIsRegister(true)
            
        } 
        catch(err) {
            console.log(err)
            setWarning(err.message)
        }
    }

    if(isRegister) {
        return <Redirect to='/' />
    }

    return (
        <MainFormStyle>
        <FormStyle>
            <h1 className='title-login color-2'>CADASTRO</h1>
            <h4 className='title-login color-2'>Preenchar as informações abaixo para finalizar cadastro</h4>

            <TextFormStyle
                fontSize='18'
                value={username}
                placeholder='Username'
                inputProps={{
                'aria-label': 'description',
                }}
                onChange={(e) => setUsername(e.target.value)}
            />

            <TextFormStyle
                fontSize='18'
                value={name}
                placeholder='Nome'
                inputProps={{
                'aria-label': 'description',
                }}
                onChange={(e) => setName(e.target.value)}
            />

            <TextFormStyle
                fontSize='18'
                value={lastName}
                placeholder='Sobrenome'
                inputProps={{
                'aria-label': 'description',
                }}
                onChange={(e) => setLastName(e.target.value)}
            />

            <TextFormStyle
                fontSize='24'
                value={email}
                placeholder='E-mail'
                inputProps={{
                'aria-label': 'description',
                }}
                onChange={(e) => setEmail(e.target.value)}
            />

            <TextFormStyle
                fontSize='18'
                value={password1}
                type='password'
                placeholder='Senha'
                inputProps={{
                'aria-label': 'description',
                }}
                onChange={(e) => setPassword1(e.target.value)}
            />

            <TextFormStyle
                fontSize='18'
                value={password2}
                type='password'
                placeholder='Confirme sua senha'
                inputProps={{
                'aria-label': 'description',
                }}
                onChange={(e) => setPassword2(e.target.value)}
            />

            <WarningStyle>{warning}</WarningStyle>

            <ButtonStyle variant="contained" color='primary' width='400' colors='f2f2f2' onClick={passwordVerification}>
                <Link className='color-1'>Finalizar Cadastro</Link>
            </ButtonStyle>

            <ButtonStyle color='primary' width='400'>
                <Link to='/login'>Voltar para o Login</Link>
            </ButtonStyle>
        </FormStyle>
        </MainFormStyle>
    )
}