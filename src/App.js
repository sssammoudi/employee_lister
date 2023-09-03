import './App.css';
import SearchBar from "./searchBar";
import AddItem from './AddItem';
import DisplayItem from './DisplayItem';
import { useState } from 'react';

function App() {
  const [filters, setFilter] = useState({})
  const [data, setData] = useState({items: []})
  
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
  
  const deleteItem = (id) => {
    let items = data["items"]
    console.log(items)
    items.splice(id, 1)
    for (const item in items) {
      if (items[item].id > id){
        items[item].id-=1
      }
    }
    setData({items: items})
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
