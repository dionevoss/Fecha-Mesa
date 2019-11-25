import React from 'react'
import {MainFormStyle, FormStyle, TextFormStyle, ButtonStyle} from './../../themes/styled'
import {Link} from 'react-router-dom'

export default () => { 
    return (
        <MainFormStyle>
            <FormStyle>
                <h1>LOGIN</h1>
                <div>
                    <TextFormStyle 
                        type='email' 
                        id="standard-basic" 
                        label="E-mail" 
                        margin="normal"
                    />
                </div>

                <div>
                    <TextFormStyle 
                        id="standard-password-input" 
                        label="Senha" 
                        type="password" 
                        autoComplete="current-password" 
                        margin="normal" 
                    />
                </div>

                <div>
                    <ButtonStyle width='150'>
                        <Link to='/login/register'>Cadastrar-se</Link>
                    </ButtonStyle>
                    <ButtonStyle variant="contained" color="primary" width='150' colors='f2f2f2'>
                        <Link to='/'  >Entrar</Link>
                    </ButtonStyle>
                </div>
            </FormStyle>
        </MainFormStyle>
    )
}