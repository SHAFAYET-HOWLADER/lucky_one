import React from 'react';
import './Header.css'
import logo from '../../images/logo.jpg'
const Header = () => {
    return (
        <nav className='header'>
           <img src={logo} alt="logo" />
           <div className="menu">
                   <li><a href="/order">Products</a></li>
                   <li><a href="/order review">Cart </a></li>
                   <li><a href="/manage inventory">About</a></li>
                   <li><a href="/about">Contact</a></li>
           </div>
        </nav>
    );
};

export default Header;