import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'

// Navigator Bar at the top for the Home and Login buttons

class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="nav-wrapper">
                    <div className="container">
                        <a href="" className="brand-logo"></a>
                        <ul className="right">
                            {/* Home page */}
                            <li><NavLink to="/">Home</NavLink></li>
                            {/* Login page */}
                            <li><NavLink to="/login">Login</NavLink></li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar
