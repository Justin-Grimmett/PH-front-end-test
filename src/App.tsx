import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import LoggedIn from './components/LoggedIn';

class App extends Component {
  render () {
    return (
      <BrowserRouter>
      <div className="App">
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/LoggedIn" element={<LoggedIn/>}/>
        </Routes>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
