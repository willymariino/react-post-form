import axios from "axios";
import { useState } from "react"
import { formatPostcssSourceMap } from "vite";

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
    if (event.target.value.type === "checkbox") {
      value = event.taget.checked // se il campo è una checkbox, react non usa value, ma checkbox.}
    }

    else {
      value.target.value
    }


    // 2) se è un numero, convertilo da stringa a numero
    if (event.target.type === "number") {
      value = parseInt(value)
    }

    // 3) aggiorna solo il campo modifiche nello stato

    setFormPosts(formPosts => ({
      ...formPosts,
      [event.target.name]: value


    })

    )


  }
  return (
    <>

    </>
  )
}

export default App
