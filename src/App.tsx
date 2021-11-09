import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import LoggedIn from './components/LoggedIn';

// Main React file

class App extends Component {
  render () {
    return (
      // Allows redirection between different pages
      <BrowserRouter>
      <div className="App">
        {/* Navigation Bar */}
        <Navbar></Navbar>
        {/* Set the pages, to be redirected to from other locations */}
        <Routes>
          {/* Home page */}
          <Route path="/" element={<Home/>}/>
          {/* Login page */}
          <Route path="/login" element={<Login/>}/>
          {/* Page once Logged In */}
          <Route path="/LoggedIn" element={<LoggedIn/>}/>
        </Routes>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
