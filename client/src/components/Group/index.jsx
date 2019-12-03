import React, {useState, useEffect} from 'react'
import api from './../../services/api'
import {MainInput, PaperStyle, MainLoaderStyle, UserStyle, TextStyle, DateStyle, InputStyle} from './style'
import CircularProgress from '@material-ui/core/CircularProgress'
import Button from '@material-ui/core/Button'
import Moment from 'react-moment'
import {Redirect} from 'react-router-dom'

export default () => {
    const [users, setUsers] = useState([])
    const [post, setPost] = useState([])
    const [loader, setLoader] = useState(true)
    const [realond, setReloand] = useState(false)
    const [userId, setUserId] = useState()
    const [postId, setPostId] = useState()
    const [redirectPost, setRedirectPost] = useState(false)

    const fetchData = async () => {
        await api
          .get(`/users`)
          .then(result =>{
                setUserId(result.data.id)
          } )
      }

    const addPost = async () => {
        setPost('')
        await api.post('/posts', {text: post})
        setReloand(!realond)
    }

    async function deletePost(id) {
        await api.delete(`/posts/${id}`)
        alert('Detado!')
        setReloand(!realond)
    }

    const handlePosts = async () => {
        await api.get('/posts')
        .then((res) => {
            setUsers(res.data)
            setTimeout(function() {
                setLoader(false)
            }.bind(this), 2000)
        })
        .catch((e) => {
            console.log('não foi')
        })
    }

    const openPost = (id) => {
        setPostId(id)
        setRedirectPost(true)
    }

    useEffect(() => {
        fetchData()
        handlePosts()
    }, [realond])

    if(loader) {
        return (
            <MainLoaderStyle>
                <CircularProgress />
            </MainLoaderStyle>
        )
    }

    if(redirectPost) {
        return <Redirect to={`/post/${postId}`} />
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
                    <PaperStyle key={user.id}>
                        <UserStyle>{user.username}</UserStyle>
                        <DateStyle>Criado: <Moment format="DD/MM : HH:mm">{user.created_at}</Moment></DateStyle>
                        <DateStyle>
                            {user.updated_at !== user.created_at ? `Atualizado: ${user.updated_at}` : ''}
                        </DateStyle>
                        <TextStyle>{user.text}</TextStyle>
                        {userId === user.user_id ? <Button color='primary' onClick={() => deletePost(user.id)}>Delete</Button> : ''}
                        {userId === user.user_id ? <Button color='secondary' onClick={() => openPost(user.id)}>Edit</Button> : ''}
                    </PaperStyle>
                ))
            }
        </div>
    )
}