import React, { useState, useEffect } from "react"
import Post from '../components/post';
import api from '../api/posts'

function Home() {
    const [search, setSearch] = useState('')
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await api.get('/posts')
            setData(((response.data).reverse()).filter(post => (post.title).toLowerCase().includes(search.toLowerCase())
            || (post.body).toLowerCase().includes(search.toLowerCase())))
        }

        fetchPosts()
    }, [search])

    return (
        <main>
            <form className="search" onSubmit={(e) => e.preventDefault()}>
                <label>Search for Posts: </label>
                <input 
                className="search_input"
                type="text" 
                value={search}
                onChange={(e) => setSearch(e.target.value)}/>
            </form>
            {data ? 
                <ul>
                    {data.map((el) => <Post key={el.id} element={el} />)}
                </ul> : 
                <></>}
        </main>
    )
}

export default Home