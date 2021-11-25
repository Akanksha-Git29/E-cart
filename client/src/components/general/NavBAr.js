import React from 'react'
import {Link} from 'react-router-dom'
import "../../App.css"

const NavBAr = () => {
    return (
        <nav className='navbar bg-main'>
            <h1 className='nav-h1'>
                <Link to="">
                    <i className='fas fa-store'></i> E-Cart
                </Link>
            </h1>
            <ul>
                <li className='nav-li'>
                    <Link to="">Merchants</Link>
                </li>
                <li className='nav-li'>
                    <Link to="/register">Register</Link>
                </li>
                <li className='nav-li'>
                    <Link to="/login">Login</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBAr
