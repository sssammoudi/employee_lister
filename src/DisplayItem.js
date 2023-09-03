
function DisplayItem (props) {
  
  const deleteItem = (item) => {
    props.deleteItem(item)
  }
  
  const showItem = (item) => {
    return (
      <tr key={item.id}>
        <th scope="col">{item.id}</th>
        <td>{item.name}</td>
        <td>{item.age}</td>
        <td>{item.gender}</td>
        <td>{item.type}</td>
        <td><button className='btn btn-danger' onClick={()=>deleteItem(item)}>Delete</button></td>
      </tr>
    )
  }
  
  return (
    <div className="container">
      <div className="row">
        <h2>Items</h2>
      </div>
      <div className="row">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Age</th>
              <th scope="col">Gender</th>
              <th scope="col">Type</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {props.items.map(showItem)}
          </tbody>
        </table>
      </div>
      
    </div>
  )
}

export default DisplayItem