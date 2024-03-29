import React from 'react';
import './index.css';
import './App.css';
import NavBar from './Components/NavBar.jsx';
import Main from './Components/Main.jsx';

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <Main/>
    </div>
  );
}
