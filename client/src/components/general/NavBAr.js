import React from 'react'
import {Link} from 'react-router-dom'
import "../../App.css"
import { connect } from 'react-redux'
import { logout } from '../../actions/authAction'

const NavBAr = ({auth : {isAuthenticated}, logout}) => {

    const user = (
        <ul>
            <li className='nav-li'>
                <Link to="/dashboard">Dashboard</Link>
            </li>
            <li className='nav-li'>
                <Link to="/register?role=merchant">Become A Merchants</Link>
            </li>
            <li className='nav-li'>
                <Link onClick={logout}  to="#!">
                    <i className="fas fa-sign-out-alt"></i>
                    <span className='hide-on-mobile'>Logout</span> 
                </Link>
            </li>
        </ul>
    )

    const guest = (
        <ul>
            <li className='nav-li'>
                <Link to="/register?role=merchant">Merchants</Link>
            </li>
            <li className='nav-li'>
                <Link to="/register?role=customer">Register</Link>
            </li>
            <li className='nav-li'>
                <Link to="/login">Login</Link>
            </li>
        </ul>
    )
    return (
        <nav className='navbar bg-main'>
            <h1 className='nav-h1'>
                <Link to="">
                    <i className='fas fa-store'></i> E-Cart
                </Link>
            </h1>
            {isAuthenticated ? user : guest}
        </nav>
    )
}

const mapStateToProps = state =>({
    auth : state.auth
})

export default connect(mapStateToProps, {logout})(NavBAr)
