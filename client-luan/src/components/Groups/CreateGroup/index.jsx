import React from 'react'
import {SpacingStyle, TextFieldStyle, EditeFormStyle, ButtonStyle, TextareaStyle} from './../../../themes/styled'

export default () => {
    
    
    return(
        <EditeFormStyle>
            <h1>Preencha os campos abaixo para criar seu novo grupo</h1>
            <SpacingStyle />

            <TextFieldStyle id='standard-basic' label='Nome do grupo' min='1' max='30' />
            <SpacingStyle />
            
            <TextareaStyle placeholder='Dê uma breve descrição do seu grupo' />
            <SpacingStyle />

            <ButtonStyle
                variant="contained"
                color="primary"
            >
                Criar Grupo
            </ButtonStyle>
            <SpacingStyle padding='20' />

        </EditeFormStyle>
    )
}