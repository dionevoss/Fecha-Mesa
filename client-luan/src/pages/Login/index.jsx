import React from 'react'
import './style.css'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import {Link} from 'react-router-dom'

const useStyles = makeStyles(theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
        margin: theme.spacing(2),
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 400,
    },
    button: {
        margin: theme.spacing(1),
        width: '150px',
      },
      input: {
        display: 'none',
      },
    button: {
    margin: theme.spacing(1),
    },
    input: {
    display: 'none',
    },
}));

export default () => { 
    const classes = useStyles()

    return (
        <div className='main-form'>
            <form className='form'>
                <h1 className='title-login-register'>Login</h1>
                <div>
                    <TextField 
                        type='email' 
                        id="standard-basic" 
                        className={classes.textField} 
                        label="E-mail" 
                        margin="normal"
                     />
                </div>

                <div>
                    <TextField 
                        id="standard-password-input" 
                        label="Password" 
                        className={classes.textField} 
                        type="password" 
                        autoComplete="current-password" 
                        margin="normal" 
                    />
                </div>

                <div className='buttons'>
                    <Button variant="contained" color="primary" className={classes.button} style={{}}>
                        <Link class='primary-button' to='/'>Entrar</Link>
                    </Button>
                    <Button color='primary' className={classes.button}>
                        <Link to='/register'>Cadastrar-se</Link>
                    </Button>
                </div>
            </form>
        </div>
    )
}