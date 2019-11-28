import styled from 'styled-components'
import TextField from '@material-ui/core/TextField'
import PhotoCamera from '@material-ui/icons/PhotoCamera'

export const PhotoCameraStyled = styled(PhotoCamera)`
    && {
        width:150px;
        height: 150px;
    }
`

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

export const ImageStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 150px;
    height: 150px;
    margin: auto;
    margin-top: 20px;
    margin-bottom: 20px;
`