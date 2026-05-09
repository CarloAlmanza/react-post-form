import { useEffect, useState } from 'react'
import PostForm from './components/PostForm'
import PostsList from './components/PostsList'

const API_URL =
  'https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts'

function App() {
  const [posts, setPosts] = useState([])

  async function fetchPosts() {
    try {
      const response = await fetch(API_URL)
      const data = await response.json()

      setPosts(data)

    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <div className="container py-5">

      <h1 className="mb-4">
        Crea un nuovo post
      </h1>

      <PostForm onPostCreated={fetchPosts} />

      <hr className="my-5" />

      <PostsList posts={posts} />
    </div>
  )
}

export default App