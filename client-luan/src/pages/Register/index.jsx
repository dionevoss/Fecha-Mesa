import React from 'react'
import {Link} from 'react-router-dom'
import './style.css'
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button'

const useStyles = makeStyles(theme => ({
    backgroundLogin: {
        backgroundColor: '#A9BCF5',
        width: '100%',
        height: '100vh',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
    },
    h1: {
        padding: '10px',
        fontSize: '2.5em'
    },
    h4: {
        padding: '5px'
    },
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
      
      return (
          <div className={classes.backgroundLogin}>
            <div>
                <form className={classes.container}>
                    <h1 className={classes.h1}>Cadastro</h1>
                    <h4 className={classes.h4}>Preenchar as informações abaixo para finalizar cadastro</h4>

                    <Input
                        className={classes.input}
                        placeholder='Nome'
                        inputProps={{
                        'aria-label': 'description',
                        }}
                    />

                    <Input
                        className={classes.input}
                        placeholder='Sobre-nome'
                        inputProps={{
                        'aria-label': 'description',
                        }}
                    />

                    <Input
                        className={classes.input}
                        placeholder='E-mail'
                        inputProps={{
                        'aria-label': 'description',
                        }}
                    />

                    <Input
                        type='password'
                        className={classes.input}
                        placeholder='Senha'
                        inputProps={{
                        'aria-label': 'description',
                        }}
                    />

                    <Input
                        type='password'
                        className={classes.input}
                        placeholder='Senha novamente'
                        inputProps={{
                        'aria-label': 'description',
                        }}
                    />

                    <Button variant="contained" color='primary' className={classes.button}>
                        <Link className='btn-primary' >Finalizar Cadastro</Link>
                    </Button>

                    <Button color='primary' className={classes.button}>
                        <Link to='/login'>Voltar para o Login</Link>
                    </Button>
                </form>
            </div>
          </div>
      )
}