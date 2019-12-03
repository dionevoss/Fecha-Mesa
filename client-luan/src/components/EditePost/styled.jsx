import styled from 'styled-components'
import Paper from '@material-ui/core/Paper'

export const PaperStyled = styled(Paper)`
    max-width: 600px;
    height: 95vh;
    padding: 20px;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const H1Styled = styled.h1`
    color: #00897b;
    margin-bottom: 30px;
`

export const TextareaStyled = styled.textarea`
    width: 600px;
    height: 150px;
    padding: 5px;
    border: none;
    background: #eeeeee;
    resize: none;
`