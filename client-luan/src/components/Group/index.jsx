import React, {useState, useEffect} from 'react'
import api from './../../services/api'
import {PaperStyle, MainLoaderStyle, UserStyle, TextStyle, DateStyle} from './style'
import CircularProgress from '@material-ui/core/CircularProgress'

export default () => {
    const [users, setUsers] = useState([])
    const [loader, setLoader] = useState(true)

    const handlePosts = async () => {
        await api.get('/posts')
        .then((res) => {
            setUsers(res.data)
            setLoader(false)
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
            {
                users.map(user => (
                    <PaperStyle>
                        <UserStyle>Usuário: {user.user_id}</UserStyle>
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