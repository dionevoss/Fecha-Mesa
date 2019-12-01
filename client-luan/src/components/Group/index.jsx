import React, {useState, useEffect} from 'react'
import api from './../../services/api'
import {MainInput, PaperStyle, MainLoaderStyle, UserStyle, TextStyle, DateStyle, InputStyle} from './style'
import CircularProgress from '@material-ui/core/CircularProgress'
import Button from '@material-ui/core/Button'

import Moment from 'react-moment';

export default () => {
    const [users, setUsers] = useState([])
    const [post, setPost] = useState([])
    const [loader, setLoader] = useState(true)

    const addPost = async () => {
        await api.post('/posts', {text: post})
    }

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
            <MainInput>
                <InputStyle value={post} 
                onChange={(e) => setPost(e.target.value)} 
                placeholder='Crie uma nova postagem' 
                />
                <Button onClick={addPost} variant="contained" color="primary">
                    Publicar
                </Button>
            </MainInput>
            {
                users.map(user => (
                    <PaperStyle>
                        <UserStyle>{user.username}</UserStyle>
                        <DateStyle>Criado: <Moment format="DD/MM/YYYY - HH:mm">{user.created_at}</Moment></DateStyle>
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