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


      {/* <div>
  <label htmlFor="pizza-element">Pizza</label>
  <input type="text" id="pizza-element" placeholder="Nome della pizza" value={pizzaName} onChange={handlePizzaName} />
</div>

<hr />

<div>
  <label htmlFor="price-element">Price</label>
  <input type="number" id="price-element" placeholder="Prezzo della pizza" value={pizzaPrice} onChange={handlePizzaPrice} />
</div> */}


      <form action="" onSubmit={savePizza}>

        <div>
          <label htmlFor="pizza-element">Pizza</label>
          <input type="text" id="pizza-element" placeholder="Nome della pizza" value={formPizza.title} onChange={handlePizza} name="title" />
        </div>

        <hr />


        <div>
          <label htmlFor="ingredients-element">Ingredienti</label>
          <input type="text" id="ingredients-element" placeholder="Ingredienti della pizza" value={formPizza.ingredients} onChange={handlePizza} name="ingredients" />
        </div>

        <hr />

        <div>
          <label htmlFor="price-element">Price</label>
          <input type="number" id="price-element" placeholder="Prezzo della pizza" value={formPizza.price} onChange={handlePizza} name="price" />
        </div>

        <hr />

        <div>
          <label htmlFor="available-element">Available</label>
          <input type="checkbox" id="available-element" checked={formPizza.available} onChange={handlePizza} name="available" />
        </div>


        <button>Salva la pizza</button>
      </form>

      <hr />


      <section>
        <h2>
          Dati della pizza in aggiornamento
        </h2>
        <p>Title: {formPizza.title}</p>
        <p>Ingredients: {formPizza.ingredients}</p>
        <p>Price; {formPizza.price} €</p>
        <p>Available: {formPizza.available ? <div>Disponibile</div> : <div>Non disponibile</div>}</p>
      </section>

      <hr />


      <section>
        <h2>
          Menu
        </h2>
        <ul>
          {menuPizze.length ? menuPizze.map((pizza, index) => <li>{pizza.title}</li>) : <li>Pizze non trovate</li>}
        </ul>

      </section>

    </>
  )
}

export default App
