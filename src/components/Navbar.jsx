import React, { useContext, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

import './style/navbar.scss';

export default function Navbar() {
  const { loggedIn, login, logout, user } = useContext(AuthContext);

  return (
    <nav className="flex gap-5 pt-4">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/map">Map</NavLink>
    
    </nav>
  );
}
