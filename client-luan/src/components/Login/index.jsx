import React, {useState} from 'react'
import {MainFormStyle, FormStyle, TextFormStyle, ButtonStyle} from '../../themes/styled'
import api from '../../services/api'
import { login } from '../../services/auth'
import {Link, Redirect} from 'react-router-dom'

export default () => { 
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    const signIn = async () => {
        try {
            setLoading(true)
            const response = await api.post('/auth', {email, password})
            login(response.data.token)            
        } catch (error) {
            console.log('erooooooooooooo')
            console.log(error)
        }
    }

    if(loading) {
        return <Redirect to='/' />
    }

    return (
        <MainFormStyle>
            <FormStyle>
                <form onSubmit={e => {e.preventDefault(); signIn()}}>
                <h1>LOGIN</h1>
                <div>
                    <TextFormStyle 
                        type='email' 
                        id="standard-basic" 
                        label="E-mail" 
                        margin="normal"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>

                <div>
                    <TextFormStyle 
                        id="standard-password-input" 
                        label="Senha" 
                        type="password" 
                        autoComplete="current-password" 
                        margin="normal" 
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>

                <div>
                    <ButtonStyle width='150'>
                        <Link to='/login/register'>Cadastrar-se</Link>
                    </ButtonStyle>
                    <ButtonStyle type='submit' variant="contained" color="primary" width='150' colors='f2f2f2'>
                        <Link>Entrar</Link>
                    </ButtonStyle>
                </div>
                </form>
            </FormStyle>
        </MainFormStyle>
    )
}