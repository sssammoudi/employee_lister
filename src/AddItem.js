import { useState } from "react"

function AddItem(props) {
  const [name, setName] = useState("")
  const [age, setAge] = useState(0)
  const [type, setType] = useState("")
  const [gender, setGender] = useState("")
  
  const AddItemBtnPressed = () => {
    props.addItem({name: name, age: age, type: type, gender: gender})
    setName("")
    setGender("")
    setType("")
    setAge(0)
  }
  
  return (
    <div className="container">
      <div className="row">
        <h2>Add an item</h2>      
      </div>
      <div className="row">
        <label htmlFor="name">Name: </label>
        <input id="name" type="text" className="form-control" value={name} onChange={(e)=>{setName(e.target.value)}}/>
        <label htmlFor="age">Age: </label>
        <input id="age" type="number" className="form-control" value={age} onChange={(e)=>{setAge(e.target.value)}}/>
        <label htmlFor="gender">Gender: </label>
        <input id="gender" type="text" className="form-control" value={gender} onChange={(e)=>{setGender(e.target.value)}}/>
        <label htmlFor="type">Type: </label>
        <input id="type" type="text" className="form-control" value={type} onChange={(e)=>{setType(e.target.value)}}/>
      </div>
      <div className="row mt-3">
        <button type="button" className="col-4 btn btn-primary" onClick={AddItemBtnPressed}>Add</button>
      </div>
    </div>
  )
}

export default AddItem;