import React from 'react'
import {TextFieldStyle, MainStyle, ButtonCreateGroupStyle, TextareaStyle} from './style'
import {SpacingStyle} from './../../../themes/styled'

export default () => {
    
    
    return(
        <MainStyle>
            <h1>Preencha os campos abaixo para criar seu novo grupo</h1>
            <SpacingStyle />

            <TextFieldStyle id='standard-basic' label='Nome do grupo' min='1' max='30' />
            <SpacingStyle />
            
            <TextareaStyle placeholder='Dê uma breve descrição do seu grupo' />
            <SpacingStyle />

            <ButtonCreateGroupStyle
                variant="contained"
                color="primary"
            >
                Criar Grupo
            </ButtonCreateGroupStyle>
            <SpacingStyle padding='20' />

        </MainStyle>
    )
}