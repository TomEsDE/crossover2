import React from 'react';
import './style/navbar.scss';

export default function Navbar() {
  return (
    <nav>
      <span className="logo">Breathe Free</span>
      <ul>
        <li>
          <a href="#map">Map</a>
        </li>
        <li>
          <a href="#causes">Causes</a>
        </li>
        <li>
          <a href="#solutions">Solutions</a>
        </li>
      </ul>
    </nav>
  );
}
