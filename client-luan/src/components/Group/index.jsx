import React, {useState, useEffect} from 'react'
import api from './../../services/api'
import {MainInput, PaperStyle, MainLoaderStyle, UserStyle, TextStyle, DateStyle, InputStyle} from './style'
import CircularProgress from '@material-ui/core/CircularProgress'
import Button from '@material-ui/core/Button'

export default () => {
    const [users, setUsers] = useState([])
    const [loader, setLoader] = useState(true)

    const handlePosts = async () => {
        await api.get('/posts')
        .then((res) => {
            setUsers(res.data)
            setLoader(false)
            console.log(res.data)
        })
        .catch((e) => {
            console.log('não foi')
        })
    }

    useEffect(() => {
        handlePosts()
    }, [])

    if(loader) {
        return (
            <MainLoaderStyle>
                <CircularProgress />
            </MainLoaderStyle>
        )
    }

    return (
        <div>
            <MainInput>
                <InputStyle placeholder='Crie uma nova postagem' />
                <Button variant="contained" color="primary">
                    Publicar
                </Button>
            </MainInput>
            {
                users.map(user => (
                    <PaperStyle>
                        <UserStyle>{user.username}</UserStyle>
                        <DateStyle>Criado: {user.created_at}</DateStyle>
                        <DateStyle>
                            {user.updated_at !== user.created_at ? `Atualização: ${user.updated_at}` : ''}
                        </DateStyle>
                        <TextStyle>{user.text}</TextStyle>
                    </PaperStyle>
                ))
            }
        </div>
    )
}