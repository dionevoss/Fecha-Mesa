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
    max-width: 600px;
    margin: auto;
    margin-bottom: 30px;
    padding: 15px;
    border: none;
    border-radius: 5px;
    background: #eeeeee;
`

export const PaperStyle = styled(Paper)`
    && {
        margin: auto;
        max-width: 600px;
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
    border-top: black solid 1px;
    padding: 5px;
    font-size: 1em;
`