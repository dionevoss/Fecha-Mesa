import styled from 'styled-components'
import Button from '@material-ui/core/Button'
import ArrowBack from '@material-ui/icons/ArrowBack'

export const GroupTableMain = styled.div`
    padding: 20px;
`

export const GroupTable = styled.table`
    width: 100%;
    text-align: left;

    tr > td {
        width: 90%;
        margin-left: 15px;
        padding: 10px;
        border-bottom: #212121 solid 1px;
    }
`

export const MainCreateYourGroup = styled.div`
    width: 80%;
`

export const PaperStyle = styled.div`
    padding: 20px;
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
`

export const ButtonStyle = styled(Button)`
    && {
        margin: 20px;
        width: 350px;
        height: 50px;
        font-size: 1.5em;
        text-align: center;
    }
    
`

export const ArrowBackStyle = styled(ArrowBack)`
    && {
        alignItems: left;
        width: 50px;
        height: 50px;
    }

    :hover {
        cursor: pointer;
    }
`