import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Fetching2 = () => {
    const [post, setPost] = useState({})
    const [id, setID] = useState(1) 

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((res) => {
            console.log(res)
            setPost(res.data)
        })
        .catch((error) =>{
            console.log(error)
        })
    }, [id])

  return (
    <div>
        <input type="text" value={id} onChange={e => setID(e.target.value)} />
        <div>{post.title}</div>
    </div>
  )
}

export default Fetching2