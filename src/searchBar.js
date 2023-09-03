import { useState } from "react"

function SearchBar(props) {
  const [name, setName] = useState("")
  const [age, setAge] = useState(0)
  const [gender, setGender] = useState("")
  const [type, setType] = useState("")
  
  const btnPressed = () => {
    props.updateSearchParams({name: name, gender: gender, age: age, type: type})
  }
  
  const btnReset = () => {
    props.updateSearchParams({name: "", gender: "", age: 0, type: ""})
    setName("")
    setGender("")
    setAge(0)
    setType("")
  }
  
  return (
    <div className="container">
      <div className="row">
        <h2>Search for item</h2>
      </div>
      <div className="row mb-3">
        <div className="col mt-1">
          <label htmlFor="name">Name : </label>
          <input id="name" type="text" className="form-control" value={name} onChange={(e)=>{setName(e.target.value)}}/>
        </div>
        <div className="col mt-1">
          <label htmlFor="age">Age : </label>
          <input id="age" type="number" className="form-control" value={age} onChange={(e)=>{setAge(e.target.value)}}/>
        </div>
        <div className="col mt-1">
          <label htmlFor="gender">Gender : </label>
          <input id="gender" type="text" className="form-control" value={gender} onChange={(e)=>{setGender(e.target.value)}}/>
        </div>
        <div className="col mt-1">
          <label htmlFor="type">Type : </label>
          <input id="type" type="text" className="form-control" value={type} onChange={(e)=>{setType(e.target.value)}}/>
        </div>
      </div>
      <div className="row">
        <div className="col-2" />
        <button type="button" className="col-4 btn btn-primary me-2" onClick={btnPressed}>Search</button>
        <button type="button" className="col-4 btn btn-primary" onClick={btnReset}>Reset</button>
      </div>
    </div>
  )
}

export default SearchBar;