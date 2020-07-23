import React from 'react';
import './App.css';
import SearchBar from './SearchBar';

export default function App() {
  return (
    <div className="App">
      <h1>The Tanay Pratap Search Engine</h1>
      <SearchBar/>
      <h3>Search for anything Tanay has ever said</h3>
    </div>
  );
}