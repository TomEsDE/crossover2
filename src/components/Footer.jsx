import React from 'react';
import './style/footer.scss';

export default function Footer() {
  return (
    <footer>
      <div className="footer-primary">
        <div className="footer-panel about-us">
          <h3>About Us</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            sint maxime deleniti! Illum in natus labore, culpa quis ab quos!
          </p>
        </div>

        <div className="footer-panel get-in-touch">
          <h3>Get In Touch</h3>
          <ul>
            <li>
              <a href="#">📍 3655 Shenandoah Rd., Luray, VA 22835</a>
            </li>
            <li>
              <a href="#">📞 (012) 345 6789</a>
            </li>
            <li>
              <a href="#">✉️ info@breathefree.de</a>
            </li>
            <li>
              <a href="#">🕑 Mon - Fri, 9AM - 10PM</a>
            </li>
          </ul>
        </div>
        <div className="footer-panel community">
          <h3>Community</h3>
          <ul>
            <li>
              <a href="#">😄 Volunteer</a>
            </li>
            <li>
              <a href="#">👩‍🏫 Take a Class</a>
            </li>
            <li>
              <a href="#">💵 Donate</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-secondary">
        <span>© Breathe Free LLC, All Rights Reserved</span>
        <div className="footer-quick-links">
          <span>Privacy Policy | Terms of Use | FAQ</span>
        </div>
      </div>
    </footer>
  );
}
