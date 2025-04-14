import axios from "axios";
import { useState } from "react"

function App() {

  const [posts, setPosts] = useState([])

  const [formPost, setFormPost] = useState({
    author: "author",
    title: "title",
    body: "testo del post",
    public: false

  })

  function handlePost(event) {


  }

  return (
    <>

    </>
  )
}

export default App
