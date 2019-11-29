import styled from 'styled-components'
import Paper from '@material-ui/core/Paper'

export const InputStyle = styled.textarea`
    height: 100px;
    width: 100%;
    border: none;
    background: #eeeeee;
    resize: none;
`

export const MainInput = styled.div`
    height: 135px;
    width: 100%;
    margin: auto;
    margin-bottom: 30px;
    padding: 15px;
    border: none;
    border-radius: 5px;
    background: #eeeeee;
    max-width: 500px;
`

export const PaperStyle = styled(Paper)`
    && {
        padding: 15px;
        margin-bottom: 10px;
    }
`

export const MainLoaderStyle = styled.div`
    width: 100%;
    height: 500px;

    display: flex;
    justify-content: center;
    align-items: center;
`

export const UserStyle = styled.p`
    font-size: 1.2em;
`

export const DateStyle = styled.p`
    font-size: 0.8em;
`

export const TextStyle = styled.p`
    font-size: 1em;
`