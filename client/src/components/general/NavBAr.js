import React from 'react'
import {Link} from 'react-router-dom'
import "../../App.css"

NavBAr = () => {
    return (
        <nav className='navbar bg-main'>
            <h1>
                <Link to="">
                    <i className='fas fa-store'></i>E-Cart
                </Link>
            </h1>
            <ul>
                <li>
                    <Link to="">Merchants</Link>
                </li>
                <li>
                    <Link to="">Register</Link>
                </li>
                <li>
                    <Link to="">Login</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBAr
