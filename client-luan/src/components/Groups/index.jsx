import React, {useState} from 'react'
import CreateGroup from './CreateGroup'
import TableGroups from './TableGroups'
import {MainCreateYourGroup, ButtonStyle, PaperStyle} from './style'
import {ArrowBackStyle} from './../../themes/styled'
import {SpacingStyle} from './../../themes/styled'
import {Paper} from '@material-ui/core'


export default () => {
    const [createGroup, setCreateGroup] = useState(false)

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

                            <ButtonStyle variant="contained" color="primary" onClick={() => setCreateGroup(!createGroup)}>Criar grupo</ButtonStyle>
                        </MainCreateYourGroup>
                    </PaperStyle>
                </Paper>

                <SpacingStyle />

                <TableGroups />
            </div>
        )
    }

    return ( 
        <Paper>
            <ArrowBackStyle onClick={() => setCreateGroup(!createGroup)} />
            
            <CreateGroup />
        </Paper>
    )
}