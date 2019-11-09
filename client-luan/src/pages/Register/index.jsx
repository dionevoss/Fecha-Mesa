import React from 'react'
import {Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button'

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
      
      return (
          <div className='main-form-login' >
            <div className='form'>
                <form className={classes.container}>
                    <h1 className='title-login color-2'>CADASTRO</h1>
                    <h4 className='title-login color-2'>Preenchar as informações abaixo para finalizar cadastro</h4>

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
                        <Link className='color-1' >Finalizar Cadastro</Link>
                    </Button>

                    <Button color='primary' className={classes.button}>
                        <Link to='/login'>Voltar para o Login</Link>
                    </Button>
                </form>
            </div>
          </div>
      )
}