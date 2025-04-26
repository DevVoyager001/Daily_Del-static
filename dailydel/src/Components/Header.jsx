import React from 'react';

const Header = ({ scrollToHome, scrollToAbout, scrollToCategories, scrollToContactUs }) => {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm fixed z-50 top-0">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              <li><a onClick={(e) => { e.preventDefault(); scrollToHome(); }}>Home</a></li>
              <li><a onClick={(e) => { e.preventDefault(); scrollToAbout(); }}>About Us</a></li>
              <li><a onClick={(e) => { e.preventDefault(); scrollToCategories(); }}>Categories</a></li>
              <li><a onClick={(e) => { e.preventDefault(); scrollToContactUs(); }}>Contact Us</a></li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl" onClick={(e) => { e.preventDefault(); scrollToHome(); }}>
            <img className="w-28 md:w-32 h-auto" src="/assets/dailyDelLogo-removebg.png" alt="" />
          </a>
        </div>

        <div className="navbar-end">
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li><a onClick={(e) => { e.preventDefault(); scrollToHome(); }}>Home</a></li>
              <li><a onClick={(e) => { e.preventDefault(); scrollToAbout(); }}>About Us</a></li>
              <li><a onClick={(e) => { e.preventDefault(); scrollToCategories(); }}>Categories</a></li>
              <li><a onClick={(e) => { e.preventDefault(); scrollToContactUs(); }}>Contact Us</a></li>
            </ul>
          </div>
          <a 
            href="https://play.google.com/store/apps/details?id=com.DailyDel" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn bg-[#C43758] text-white hover:text-black hover:bg-[#d45d7a] transition-colors duration-300"
          >
            Get the App
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;