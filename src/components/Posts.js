import {useState, useEffect} from 'react'
import Post from "./Post";
import { getAllPost } from '../api/PostApi';
export default function Posts() {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    const fetchApi = async () =>{
      try {
        const data = await getAllPost()
        console.log(data.data)
        setPosts(data.data)
      } catch (error) {
        console.log(error)
        window.alert('get posts data failed')
      }
    }
    fetchApi()
  }, [])
  return (
    <div className="posts">
        {posts.map(post => {
          return (
             <Post post = {post} />
          )
        })}
    </div>
  )
}
