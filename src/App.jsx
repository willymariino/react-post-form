import axios from "axios";
import { useState } from "react"


function App() {

  // Stato per gestire i dati del form
  const [formPosts, setFormPosts] = useState({
    author: "",
    title: "",
    body: "",
    public: false
  })

  // Stato per memorizzare la lista dei post inviati
  const [posts, setPosts] = useState([])

  // Effettua una chiamata GET per recuperare i post all'avvio (commentato in modo da mostrare solo i post inviati dall'utente, invece che tutti quelli presenti nell'API)
  // useEffect(() => {
  //   axios.get("https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts")
  //     .then((res) => setPosts(res.data))
  //     .catch((error) => console.error("errore durante la chiamata API (get)", error))
  // }, [])

  // Gestisce il cambiamento dei campi del form
  function handleFormData(event) {
    // 1) Prende il valore corretto in base al tipo di input
    let value;
    if (event.target.type === "checkbox") {
      value = event.target.checked // Per le checkbox si usa checked invece di value
    }
    else {
      value = event.target.value // Per gli altri input si usa value
    }

    // 2) Se il campo è di tipo numero, converte il valore da stringa a numero
    if (event.target.type === "number") {
      value = parseInt(value)
    }

    // 3) Aggiorna solo il campo modificato nello stato formPosts
    setFormPosts(formPosts => ({
      ...formPosts,
      [event.target.name]: value
    }))
  }

  // Gestisce l'invio del form e aggiunge un nuovo post
  function addPosts(e) {
    e.preventDefault() // Previene il comportamento di default del form (refresh pagina)
    axios.post("https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts", formPosts)
      .then((res) => {
        console.log("post aggiunto", res.data)
        // Aggiorna la lista dei post aggiungendo il nuovo post
        setPosts(prev => [...prev, res.data])
        // Resetta i campi del form
        setFormPosts({
          author: "",
          title: "",
          body: "",
          public: false
        })
      })
      .catch((error) => console.error("errore durante l'invio del post (post)", error))
  }

  return (
    <>

      <h1>React Multi Form</h1>

      {/* Form per l'invio dei post */}
      <form onSubmit={addPosts} className="multi-form">

        {/* Campo autore */}
        <div className="input">
          <label>author</label>
          <input
            type="text"
            name="author"
            value={formPosts.author}
            onChange={handleFormData}
            placeholder="autore"
          />
        </div>

        {/* Campo titolo */}
        <div className="input">
          <label>title</label>
          <input
            type="text"
            name="title"
            value={formPosts.title}
            onChange={handleFormData}
            placeholder="title"
          />
        </div>

        {/* Campo corpo del post */}
        <div className="input">
          <label>body</label>
          <input
            type="text"
            name="body"
            value={formPosts.body}
            onChange={handleFormData}
            placeholder="body"
          />
        </div>

        {/* Checkbox per lo stato pubblico/privato */}
        <div>
          <label>public</label>
          <input
            type="checkbox"
            name="public"
            checked={formPosts.public}
            onChange={handleFormData}
          />
        </div>

        {/* Bottone per inviare il form */}
        <button className="send-btn">invia</button>
      </form>

      {/* Visualizzazione dei post inviati */}
      <div>
        <p> <strong>ecco i post inviati:</strong></p>
        {posts.map(post => (
          <p key={post.id}>
            {post.author} <br />
            {post.title} <br />
            {post.body}
          </p>
        ))}
      </div>
    </>
  )
}

export default App

