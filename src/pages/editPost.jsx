import React, { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import api from '../api/posts'

function EditPost() {
    const navigate = useNavigate()
    const params = useParams()
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    useEffect(() => {
        const fetchPosts = async () => { 
            const response = await api.get(`/posts/${params.id}`)
            setTitle(response.data.title)
            setBody(response.data.body)
        }

        fetchPosts()
    }, [params])

    async function handleSubmit(e) {
        e.preventDefault()

        const editedPost = {
            'id': params.id,
                title,
                body,
        }
        await api.put(`/posts/${params.id}`, editedPost)

        setBody('')
        setTitle('')
        navigate('/')
    }

    return (
        <main>
            <h1>Edit Post</h1>
            <form className="new_post" onSubmit={handleSubmit}>
                <label>
                    <p>Title:</p>
                    <input 
                    type="text" 
                    placeholder="Enter your title here..."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}/>
                </label>
                <label>
                    <p>Post:</p>
                    <input 
                    className="text_area" 
                    type='text' 
                    placeholder="Write what's on your mind..."
                    value={body}
                    onChange={(e) => setBody(e.target.value)}/>
                </label> 
                <button>Edit</button>
            </form>
        </main>
    )
}

export default EditPost