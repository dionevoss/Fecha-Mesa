import React from 'react'
import './style.css'
import {Paper} from '@material-ui/core'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    paper: {
        padding: '20px',
        marginBottom: '15px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    },
    mainCreateGroup: {
        width: '80%',
    },
    button: {
        margin: theme.spacing(2),
        width: '350px',
        height: '50px',
        fontSize: '1.5em',
        textAlign: 'center',
    },
}));

export default () => {
    const classes = useStyles()
    
    return (
        <div>
            <Paper className={classes.paper}>
                <div className={classes.mainCreateGroup}>
                    <h2>
                        Junte seus amigos e crie um grupo para compartilhar novidades e 
                        agendar melhor suas jogatinas clicando no link abaixo
                    </h2>

                    <Button variant="contained" color="primary" className={classes.button}>Criar grupo</Button>
                </div>
            </Paper>
                
            <Paper>
                <div className='groups-table-main'>
                    <table className='groups-table'>
                        <tr>
                            <th>
                                Grupos
                            </th>
                            <th>
                                Ações
                            </th>
                        </tr>
                        <tr>
                            <td>
                                É US guri
                            </td>
                            <td className='actions'>
                                Agua
                            </td>
                        </tr>

                        <tr>
                            <td>
                                É US guri
                            </td>
                        </tr>

                        <tr>
                            <td>
                                É US guri
                            </td>
                        </tr>
                    </table>
                </div>
            </Paper>
        </div>
    )
}