import styled from 'styled-components'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

export const MainFormStyle = styled.div`
    display: flex;
    align-items: center;
    height: 100vh;
    color: #00897b;
`

export const FormStyle = styled.form`
    width: 600px;
    padding: 55px;
    margin: auto;
    border-radius: 5px;
    background-color: #f2f2f2;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    box-shadow: 2px 2px 2px 2px rgba(50, 50, 50, 0.77);
`

export const TextFormStyle = styled(TextField)`
    && {
        margin: 15px 0px;
        font-size: 1.5em;
        width: 400px;
    }
`

export const ButtonStyle = styled(Button)`
    && {
        width: ${props => `${props.width}px`};
        margin: 10px;
    }

    a {
        text-decoration: none;
        color: #00897b;
        width: 100%;
        height: 100%;
        color: ${props => `#${props.fontColor}`};
    }
`

export const WarningStyle = styled.div`
    color: red;
    width: 100%;
    height: 26px;
    text-align: center;
    font-size: 14px;
    font-weight: 600;
`