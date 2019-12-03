import React, {useState, useEffect} from 'react'
import api from './../../services/api'
import {PaperStyled, TextareaStyled, H1Styled} from './styled'
import {ButtonStyle} from './../../themes/styled'
import {Link} from 'react-router-dom'

export default (props) => {
    const [postText, setPostText] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const [isAlter, setIsAlter] = useState(false)
    const id = props.match.params.id

    document.body.style.background = '#00897b'

    const handlePost = async () => {
        await api.get(`/posts/${id}`)
        .then((res) => {
            setIsLoading(false)
            setPostText(res.data.text)
        })
        .catch((error) => {
            console.log(error)
            alert('ERRO DE CONEXÃO')
        })
    }

    const alterText = async (text) => {
        setIsAlter(!isAlter)
        if(text.trim() === '') {
            return
        } 

        await api.put(`/posts/${id}`, {text: text})
        .then(() => {
            alert('Alteração realizada com sucesso!')
        })
        .catch(() => {
            alert('Ocorreu algum imprevisto!')
        })
    }

    useEffect(() => {
        handlePost()
    }, [])

    useEffect(() => {
    }, [isAlter])

    if(isLoading) {
        return <h1>Carregando...</h1>
    }

    return (
        <PaperStyled>
            <H1Styled>Edite sua postagem</H1Styled>
            <TextareaStyled placeholder='Novo conteudo' value={postText} onChange={(e) => setPostText(e.target.value)} />
            <ButtonStyle variant="contained" color="primary" widthP='100' onClick={() => alterText(postText)} >
                Atualizar
            </ButtonStyle>

            <ButtonStyle widthP='100'>
                <Link to='/'>Voltar para a home</Link>
            </ButtonStyle>
        </PaperStyled>
    )
}