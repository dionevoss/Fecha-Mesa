import React, {useState} from 'react'
import {SpacingStyle, TextFieldStyle, EditeFormStyle, ButtonStyle, TextareaStyle} from './../../../themes/styled'
import api from '../../../services/api'

export default () => {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    
    const createGroup = async () => {
        try {
            await api.post('/groups', {name, description})
        } catch (error) {
            console.log(error)
        }
    }

    
    return(
        <EditeFormStyle>
            <h1>Preencha os campos abaixo para criar seu novo grupo</h1>
            <SpacingStyle />

            <TextFieldStyle id='standard-basic' label='Nome do grupo' min='1' max='30' value={name} 
            onChange={(e) => setName(e.target.value)}
            />
            <SpacingStyle />
            
            <TextareaStyle placeholder='Dê uma breve descrição do seu grupo' value={description} 
            onChange={(e) => setDescription(e.target.value)}
            />
            <SpacingStyle />

            <ButtonStyle
                variant="contained"
                color="primary"
                type="submit"
                onClick={createGroup}
            >
                Criar Grupo
            </ButtonStyle>
            <SpacingStyle padding='20' />

        </EditeFormStyle>
    )
}