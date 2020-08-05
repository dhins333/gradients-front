import React from 'react';
import { NavLink,Link } from 'react-router-dom';

const Header = () => {

    return(
        <div className = 'header'>
            <Link to = '/' exact = {true} style = {{textDecoration:'none'}}><h2 className = 'header-h2'>Gradients</h2></Link>
            <div>
                    <NavLink exact = {true} to='/' activeClassName = 'nav-active' className = 'nav-item'>Home</NavLink>
                    <NavLink exact = {true} to='/showcase' activeClassName = 'nav-active' className = 'nav-item'>Showcase</NavLink>
            </div>
        </div>
    )
}

export default Header;