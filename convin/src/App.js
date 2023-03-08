import logo from './logo.svg';
import './App.css';
import React from 'react'
import ReactDOM from 'react-dom'
import { Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import AddUser from './pages/AddUser';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/AddUser" element={<AddUser/>} />
      </Routes>
      
    </div>
  );
}

export default App;
