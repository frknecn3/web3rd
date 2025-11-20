import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <header className=''>
            <div className='logo'>
                ROUTING
            </div>
            <nav>
                {/* ^ navlink has its own function that gives itself an "active" class when you are currently on the route that it represents */}
                <NavLink className='link' to='/'>Main</NavLink>
                <NavLink className='link' to='/profile'>Profile</NavLink>
                <NavLink className='link' to='/product'>Products</NavLink>
            </nav>
        </header>
    )
}

export default Header