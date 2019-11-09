import React from 'react'
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
        margin: theme.spacing(2),
        width: '150px',
    },
    input: {
        display: 'none',
    },
}));

export default () => { 
    const classes = useStyles()

    return (
        <div className='main-form-login'>
            <form className='form'>
                <h1 className='title-login color-2'>LOGIN</h1>
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

                <div>
                    <Button className={classes.button}>
                        <Link to='/login/register'>Cadastrar-se</Link>
                    </Button>
                    <Button variant="contained" color="primary" className={classes.button}>
                        <Link to='/' class='color-1' >Entrar</Link>
                    </Button>
                </div>
            </form>
        </div>
    )
}