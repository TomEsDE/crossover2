import React from 'react';
import './style/hero.scss';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <span className="logo">breathe free</span>
        <p>How does air pollution affect you?</p>
        <a href="#map">Learn more</a>
      </div>
    </section>
  );
}
