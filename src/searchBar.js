import { useState } from "react"

function SearchBar(props) {
  const [name, setName] = useState("")
  const [maxPrice, setMaxPrice] = useState(0)
  const [minPrice, setMinPrice] = useState(0)
  const [type, setType] = useState("")
  
  const btnPressed = () => {
    props.updateSearchParams({name: name, prixMin: minPrice, prixMax: maxPrice, type: type})
  }
  
  return (
    <div>
      <h2>Search for item</h2>
      <form>
        <label htmlFor="name">Name: </label>
        <input id="name" type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/>
        <label htmlFor="max-price">Max Price: </label>
        <input id="max-price" type="number" value={maxPrice} onChange={(e)=>{setMaxPrice(e.target.value)}}/>
        <label htmlFor="min-price">Min Price: </label>
        <input id="min-price" type="number" value={minPrice} onChange={(e)=>{setMinPrice(e.target.value)}}/>
        <label htmlFor="type">Type: </label>
        <input id="type" type="text" value={type} onChange={(e)=>{setType(e.target.value)}}/>
        <button type="button" onClick={btnPressed}>Search</button>
      </form>
    </div>
  )
}

export default SearchBar;