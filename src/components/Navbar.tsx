import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'

class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="nav-wrapper">
                    <div className="container">
                        <a href="" className="brand-logo"></a>
                        <ul className="right">
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/login">Login</NavLink></li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar
