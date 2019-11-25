import styled from 'styled-components'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

export const TextFieldStyle = styled(TextField)`
    && {
        width: 100%;
    }
`

export const MainStyle = styled.div`
    max-width: 600px; 
    padding: 15px;
    padding-top: 30px;
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    margin: auto;
`

export const TextareaStyle = styled.textarea`
    resize: none;
    height: 100px;
    padding: 5px;
`

export const ButtonCreateGroupStyle = styled(Button)`
    && {
        width: 200px;
    }
`