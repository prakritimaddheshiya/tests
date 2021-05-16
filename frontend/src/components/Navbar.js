import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
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

        <a
          className='ml-1'
          href='https://www.youtube.com/channel/UC6Dk0Xn-bx5XyX7NQbgjrng'
          alt='yt-page'
          target='_blank'
          rel='noreferrer'>
          <i className='fab fa-youtube' />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
