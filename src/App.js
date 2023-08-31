import './App.css';
import SearchBar from "./searchBar";
import { useState } from 'react';

function App() {
  const [data, setData] = useState({})
  
  const updateData = (SearchParams) => {
    setData(SearchParams)
  }
  
  return (
    <div className="App">
      <SearchBar callback={updateData}/>  
      <p>Name: {"name" in data ? data["name"] : "No data found"}</p>
    </div>
  );
}

export default App;
