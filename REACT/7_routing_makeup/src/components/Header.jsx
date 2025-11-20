import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <nav>
                <NavLink to='/' className='navlink'>
                    Home
                </NavLink>
                <NavLink to='/product' className='navlink'>
                    Products
                </NavLink>
                <NavLink to='/profile' className='navlink'>
                    Profile
                </NavLink>
            </nav>
        </header>
    )
}

export default Header