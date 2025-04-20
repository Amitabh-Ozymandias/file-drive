import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import '../styles/navbar.css';  // Import your CSS for navbar and switch

const Navbar = () => {
  const navigate = useNavigate();
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    navigate('/');
  };

  return (
    <nav className="navbar">
      <h1 className="logo">FileDrive</h1>
      <div className="nav-links">
        <NavLink to="/home" className="nav-link">Home</NavLink>
        <NavLink to="/upload" className="nav-link">Upload</NavLink>
        <button onClick={handleLogout} className="nav-link logout">Sign Out</button>

        {/* Light/Dark Theme Switch */}
        <div className="switch">
          <input
            type="checkbox"
            checked={theme === 'dark'}
            onChange={toggleTheme}
            id="theme-toggle"
          />
          <label htmlFor="theme-toggle" className="slider">
            <span className="star star_1"></span>
            <span className="star star_2"></span>
            <span className="star star_3"></span>
            <span className="cloud"></span>
          </label>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
