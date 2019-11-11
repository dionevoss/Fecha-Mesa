import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import Input from '@material-ui/core/Input'
import Button from '@material-ui/core/Button'
import api from './../../services/api'

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '55px',

        width: '600px',
        background: '#f2f2f2',
        borderRadius: '5px',
    },

    input: {
        margin: theme.spacing(3),
        width: '400px',
    },

    button: {
        margin: theme.spacing(1),
        width: '400px'
    },
  }));

export default () => {
    const classes = useStyles()
    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password1, setPassword1] = useState('')
    const [password2, setPassword2] = useState('')
    const [warning, setWarning] = useState('')

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

        try{
            const response = await api.post('/users', {first_name: name, last_name: lastName, email: email, password: password1})
            console.log(response)
        } 
        catch(err) {
            console.log(err)
            setWarning(err)
        }
    }

      return (
          <div className='main-form-login' >
            <div className='form'>
                <form className={classes.container}>
                    <h1 className='title-login color-2'>CADASTRO</h1>
                    <h4 className='title-login color-2'>Preenchar as informações abaixo para finalizar cadastro</h4>

                    <Input
                        value={name}
                        className={classes.input}
                        placeholder='Nome'
                        inputProps={{
                        'aria-label': 'description',
                        }}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <Input
                        value={lastName}
                        className={classes.input}
                        placeholder='Sobre-nome'
                        inputProps={{
                        'aria-label': 'description',
                        }}
                        onChange={(e) => setLastName(e.target.value)}
                    />

                    <Input
                        value={email}
                        className={classes.input}
                        placeholder='E-mail'
                        inputProps={{
                        'aria-label': 'description',
                        }}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <Input
                        value={password1}
                        type='password'
                        className={classes.input}
                        placeholder='Senha'
                        inputProps={{
                        'aria-label': 'description',
                        }}
                        onChange={(e) => setPassword1(e.target.value)}
                    />

                    <Input
                        value={password2}
                        type='password'
                        className={classes.input}
                        placeholder='Confirme sua senha'
                        inputProps={{
                        'aria-label': 'description',
                        }}
                        onChange={(e) => setPassword2(e.target.value)}
                    />

                    <p className='warning'>{warning}</p>

                    <Button variant="contained" color='primary' className={classes.button} onClick={passwordVerification}>
                        <Link className='color-1'>Finalizar Cadastro</Link>
                    </Button>

                    <Button color='primary' className={classes.button}>
                        <Link to='/login'>Voltar para o Login</Link>
                    </Button>
                </form>
            </div>
          </div>
      )
}