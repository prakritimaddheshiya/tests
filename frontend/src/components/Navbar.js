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
          href='https://www.youtube.com/channel/UC6Dk0Xn-bx5XyX7NQbgjrng'
          alt='yt-page'
          target='_blank'
          rel='noreferrer'>
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/800px-YouTube_full-color_icon_%282017%29.svg.png'
            alt='yt-icon'
            width='75px'
            height='50px'
          />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
