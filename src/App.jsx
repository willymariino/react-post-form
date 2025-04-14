import axios from "axios";
import { useState } from "react"


function App() {



  const [formPosts, setFormPosts] = useState({
    author: "author",
    title: "title",
    body: "testo del post",
    public: false

  })

  function handleFormData(event) {

    // 1) prendere il valore corretto in base al tipo
    let value;
    if (event.target.type === "checkbox") {
      value = event.target.checked // se il campo è una checkbox, react non usa value, ma checkbox.}
    }

    else {
      value = event.target.value
    }


    // 2) se è un numero, convertilo da stringa a numero
    if (event.target.type === "number") {
      value = parseInt(value)
    }

    // 3) aggiorna solo il campo modifiche nello stato

    setFormPosts(formPosts => ({
      ...formPosts,
      [event.target.name]: value


    }))


  }

  function addPosts(e) {
    e.preventDefault()
    axios.post("https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts", formPosts)
      .then((res) => {
        console.log("post aggiunto")
        setFormPosts({
          author: "author",
          title: "title",
          body: "testo del post",
          public: false
        })
      })

      .catch((error) => console.error("errore durante la chiamata API", error))
  }

  return (
    <>

      <h1>React Multi Form</h1>

      <form onSubmit={addPosts}>

        <div>
          <label>author</label>
          <input
            type="text"
            name="author"
            value={formPosts.author}
            onChange={handleFormData}
            placeholder="autore"
          />
        </div>

        <div>
          <label>title</label>
          <input
            type="text"
            name="title"
            value={formPosts.title}
            onChange={handleFormData}
            placeholder="title"
          />
        </div>

        <div>
          <label>body</label>
          <input
            type="text"
            name="body"
            value={formPosts.body}
            onChange={handleFormData}
            placeholder="body"
          />
        </div>

        <div>
          <label>public</label>
          <input
            type="checkbox"
            name="public"
            checked={formPosts.public}
            onChange={handleFormData}
          />
        </div>

        <button>invia</button>
      </form>



    </>
  )
}

export default App
