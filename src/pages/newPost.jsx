import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import api from '../api/posts'

function NewPost() {
    const navigate = useNavigate()
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    async function handleSubmit(e) {
        e.preventDefault()
        const newPostData = {
            'id': Math.random() * 1000,
            'title': title,
            'body': body,
        }

        await api.post('/posts', newPostData)
        
        setBody('')
        setTitle('')
        navigate('/')
    }

    return (
        <main>
            <h1>Create New Post</h1>
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
                <button>Submit</button>
            </form>
        </main>
    )
}

export default NewPost