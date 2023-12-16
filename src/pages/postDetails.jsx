import React, { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import api from '../api/posts'

function PostDetails() {
    const [element, setElement] = useState(null)
    const params = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        const fetchPosts = async () => { 
            const response = await api.get(`/posts/${params.id}`)
            setElement(response.data)
        }

        fetchPosts()
    }, [params])

    async function handleDelete() {
        await api.delete(`posts/${params.id}`)
        navigate('/')
    }

    function handleEdit() {
        navigate(`/editPost/${params.id}`)
    }

    return (
        <div className="post_details">
            {element ? 
                <>
                    <h3>Title: {element.title}</h3>
                    <p>Context: {element.body}</p>
                    <div className="buttons">
                        <button className="edit" onClick={handleEdit}>Edit Post</button>
                        <button className="delete" onClick={handleDelete}>Delete Post</button>
                    </div>
                </>: 
                <p>Loading Post...</p>}
        </div>
    )
}

export default PostDetails