import React from 'react';
import { NavLink } from 'react-router-dom';
import { Droplets } from 'lucide-react';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Droplets size={28} color="#D4AF37" />
        Perfume Haven
      </div>
      <nav className="nav-links">
        <NavLink 
          to="/" 
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          Home
        </NavLink>
        <NavLink 
          to="/about" 
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          About
        </NavLink>
        <NavLink 
          to="/login" 
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          Login
        </NavLink>
        <NavLink 
          to="/register" 
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          Register
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
