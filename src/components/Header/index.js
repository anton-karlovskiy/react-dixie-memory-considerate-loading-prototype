
import React from 'react';

import './header.css';
import logo from '../../assets/images/logo.webp';

const Header = () => {
  return (
    <div className='header'>
      <div className='bottom-part bottom-left'>
        <nav className='header-nav'>
          <a href='/' className='header-nav-item'>Home</a>
          <a href='https://dixiemech.store/' className='header-nav-item'>Shop</a>
          <a href='/groupbuys' className='header-nav-item'>GroupBuys</a>
          <a href='/news' className='header-nav-item'>News</a>
          <a href='https://dixiemech.store/pages/faq' className='header-nav-item'>Help</a>
        </nav>
      </div>
      <div className='bottom-part bottom-center'>
        <a href='/' className='header-branding'>
          <img src={logo} alt='Dixie Mech' className='header-branding-logo' />
        </a>
      </div>
      <div className='bottom-part bottom-right'>
        <nav className='header-nav'>
          <a href='https://discordapp.com/invite/KaZjphH' target='_blank' rel='noopener noreferrer' className='header-nav-item'>Discord</a>
          <a href='https://dixiemech.store/account/login' className='header-nav-item'>Account</a>
          <a href='https://dixiemech.store/search' className='header-nav-item'>Search</a>
          <a href='https://dixiemech.store/cart' className='header-nav-item'>Cart</a>
        </nav>
      </div>
    </div>
  );
};

export default Header;
