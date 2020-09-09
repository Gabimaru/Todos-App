import React from 'react';
// import logo from './logo.svg';
//import './App.css';
import Todos from "./components/Todos.js"

function App() {
  return (
    <div className="container my-4">
      <h1 className="text-center">ToDos App</h1>
      <Todos />
    </div>
  )
}

export default App;
