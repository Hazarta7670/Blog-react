import React from "react"
import { useNavigate } from "react-router-dom"

function Post({element}) {
    const navigate = useNavigate()

    function handleClick() {
        navigate(`/post/${element.id}`)
    }

    return (
        <li onClick={handleClick}>
            <h3>{element.title}</h3>
            <p>{element.body}</p>
        </li>
    )
}

export default Post