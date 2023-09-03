import './App.css';
import SearchBar from "./searchBar";
import AddItem from './AddItem';
import DisplayItem from './DisplayItem';
import { useState, useEffect } from 'react';

function App() {
  const [filters, setFilter] = useState({})
  const [data, setData] = useState({items: []})
  
  useEffect (()=>{
    fetch("http://localhost:3000/items")
    .then((response) => response.json())
    .then((dataJSON)=> {
      setData({items: dataJSON})
    });
  }, [])
  
  const filterData = (data) => {
    const filterData = []
    
    if (!filters.name && !filters.age && !filters.gender && !filters.type) {
      return data
    }

    for (const item of data) {
      if (filters.name !== "" && item.name !== filters.name) {continue}
      if (filters.age !== 0 && item.age !== filters.age) {continue}
      if (filters.gender !== "" && item.gender !== filters.gender) {continue}
      if (filters.type !== "" && item.type !== filters.type) {continue}
      filterData.push(item)
    }
    return filterData
  }
  
  const updateFilter = (SearchParams) => {
    setFilter(SearchParams)
  }
  
  const deleteItem = (item) => {
    let items = data["items"]
    const requestoptions = {
      method: "DELETE"
    }
    fetch(`http://localhost:3000/items/${item.id}`, requestoptions)
    .then((response)=> {
      if (response.ok) {
        const idx = items.indexOf(item)
        items.splice(idx, 1)
        setData({items: items})
        console.log(data)
      }
    })
  }
  
  const addItemtoData = (item) => {
    let items = data["items"]  
    const requestOptions = {
      method: "POST",
      headers: {"Content-Type": "application/json"}, 
      body : JSON.stringify(item),
    }
    fetch("http://localhost:3000/items", requestOptions)
    .then((response) => response.json())
    .then((data)=> {
      items.push(data)
      setData({items: items})
    });
  }
  
  return (
    <div className="container">
      <div className="row mt-3">
        <DisplayItem items={filterData(data["items"])} deleteItem={deleteItem}/>
      </div>
      <div className="row mt-3">
        <SearchBar updateSearchParams={updateFilter} /> 
      </div>
      <div className="row mt-3">
        <AddItem addItem={addItemtoData} />
      </div>
    </div>
  );
}

export default App;
