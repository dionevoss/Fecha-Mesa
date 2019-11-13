import React, {useState, useEffect} from 'react'
import CreateGroup from './CreateGroup'
import {GroupTable, GroupTableMain, MainCreateYourGroup, ArrowBackStyle, ButtonStyle, PaperStyle} from './style.js'
import {Paper} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import ExitToApp from '@material-ui/icons/ExitToApp'

export default () => {
    const [createGroup, setCreateGroup] = useState(false)

    useEffect(() => {
        return () => false
    }, [createGroup])

    if(!createGroup) {
        return (
            <div>
                <Paper>
                    <PaperStyle>
                        <MainCreateYourGroup>
                            <h2>
                                Junte seus amigos e crie um grupo para compartilhar novidades e 
                                agendar melhor suas jogatinas clicando no link abaixo
                            </h2>

                            <ButtonStyle variant="contained" color="primary" onClick={() => setCreateGroup(true)}>Criar grupo</ButtonStyle>
                        </MainCreateYourGroup>
                    </PaperStyle>
                </Paper>
            
                <Paper>
                    <GroupTableMain>
                        <GroupTable>
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
                                    <DeleteIcon />
                                    <ExitToApp />
                                </td>
                            </tr>
                        </GroupTable>
                    </GroupTableMain>
                </Paper>
            </div>
        )
    }
    else {
        return ( 
            <Paper>
                <ArrowBackStyle onClick={() => setCreateGroup(false)} />
                <PaperStyle>
                    <CreateGroup />
                </PaperStyle>
            </Paper>
        )
    }
}