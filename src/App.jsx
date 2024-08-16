import { useState } from 'react'
import './App.css';
import SearchBar from './components/Search/SearchBar';

function App() {

  return (
    <>
      <div className="search-bar">
        <div className="search-bar-container">
          <SearchBar />
        </div>
      </div>
    </>
  )
}

export default App
