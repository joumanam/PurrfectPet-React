import React from 'react'
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa'

function Navbar() {

    return (
       <nav className="navbar">
            {/* <NavLink className="navbar-brand navbar-logo" to="/" exact>
        Purrfect Pet
      </NavLink> */}
      <h3 className='logo'>Purrfect Pet</h3>
    
           <NavLink className='navpage' to="/" exact> Home</NavLink>
           <NavLink className='navpage' to="/profile" exact> Profile</NavLink>
           <NavLink className='navpage' to="/about" exact> About</NavLink>
           <NavLink className='navpage' to="/vaccines" exact> Vaccines</NavLink>
           <NavLink className='navpage' to="/logout" exact> Login/Logout</NavLink>




        </nav>
    )
}

export default Navbar
