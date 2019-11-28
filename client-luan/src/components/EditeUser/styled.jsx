import styled from 'styled-components'
import TextField from '@material-ui/core/TextField'


export const InputStyled = styled(TextField)`
    && {
        width: 300px;
        margin: 10px 0px;
    }
`

export const MainStyled = styled.div`
    padding: 20px;
    max-width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`