import './App.css';
import SearchBar from "./searchBar";
import { useState } from 'react';

function App() {
  const [filters, setFilter] = useState({})
  
  const updateFilter = (SearchParams) => {
    setFilter(SearchParams)
  }
  
  return (
    <div className="App">
      <SearchBar updateSearchParams={updateFilter}/>
    </div>
  );
}

export default App;
