import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <nav className="nav-wrapper red darken-3">
                <div className="container">
                    <Link className="brand-logo" >
                        <span style={{float:'left'}}>My Blog</span>
                        <ul className="right">
                           <li><NavLink exact to="/">HOME</NavLink></li>
                           <li><NavLink exact to="/about">About</NavLink></li>
                           <li><NavLink exact to="/contact">Contact</NavLink></li>
                        </ul>
                    </Link>
                </div>
            </nav>
        </div>
    )
}

export default Navbar