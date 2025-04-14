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

    function addPosts() {
      axios.post("https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts")

        .then((res) => setFormPosts(res.data))
        .catch((error) => console.error("errore durante la chiamata API", error))
    }

  }
  return (
    <>

    </>
  )
}

export default App
