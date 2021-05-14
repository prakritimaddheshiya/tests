import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

const Navbar = () => {
  const history = useHistory();
  //   const username = user ? user.user.username : "";
  const isLoggedIn = false;
  const accountType = "superuser";

  const handleLogout = (e) => {
    localStorage.removeItem("user");
  };

  return (
    <nav
      className='navbar navbar-dark navbar-expand-sm justify-content-between'
      style={{ backgroundColor: "#0a1e29" }}>
      <div className='container'>
        <Link className='navbar-brand m-0' to='/'>
          <img
            className='rounded-circle mr-2'
            src='https://yt3.ggpht.com/ytc/AAUvwnj91_VRmZQ1xRoBsKlQnog8eJEGoAxpesxXNuc4yo0=s176-c-k-c0x00ffffff-no-rj'
            alt='logo'
            style={{ width: "50px", height: "50px" }}
          />
          Prakriti Maddheshiya
        </Link>

        {!isLoggedIn && (
          <div className='row'>
            <button
              className='navbar-toggler'
              type='button'
              data-toggle='collapse'
              data-target='#navbarSupportedContent'
              aria-controls='navbarSupportedContent'
              aria-expanded='false'
              aria-label='Toggle navigation'>
              <span className='navbar-toggler-icon'></span>
            </button>

            <div
              className='collapse navbar-collapse'
              id='navbarSupportedContent'>
              <ul className='navbar-nav'>
                <li className='nav-item'>
                  <Link className='nav-link' to='/login'>
                    Login
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' to='/signup'>
                    Signup
                  </Link>
                </li>
              </ul>
            </div>
            <a
            className='ml-2'
              href='https://www.youtube.com/channel/UC6Dk0Xn-bx5XyX7NQbgjrng'
              alt='yt-page'
              target='_blank'
              rel='noreferrer'>
              <i className='fab fa-youtube' />
            </a>
          </div>
        )}

        {isLoggedIn && (
          <div className='row'>
            <a
              href='https://www.youtube.com/channel/UC6Dk0Xn-bx5XyX7NQbgjrng'
              alt='yt-page'
              target='_blank'
              rel='noreferrer'>
              <i className='fab fa-youtube' />
            </a>
            <Link className='nav-link' to='/login' onClick={handleLogout}>
              Logout
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
