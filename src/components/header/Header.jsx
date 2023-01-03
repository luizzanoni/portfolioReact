import React, { useState } from 'react';
import "./header.css";

export const Header = () => {
  /* === chance background Header === */
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    // when the scroll is higher than 200 viewport height, add the scroll-header class to a tag with the header tag
    if (this.scrollY >= 80) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
  });
  
  /* === toggle menu === */
  const [Toggle, showMenu] = useState(false);

  return (
    <header className='header'>
      <nav className='nav container'>
        <a href="index.html" className='nav__logo'>Luiz Gustavo Zanoni | DEV</a>

        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="#home" className="nav__link active-link">
                <i className="iul uil-estate nav__icon"></i> Home
              </a>
            </li>

            <li className="nav__item">
              <a href="#about" className="nav__link">
                <i className="iul uil-user nav__icon"></i> About
              </a>
            </li>

            <li className="nav__item">
              <a href="#skills" className="nav__link">
                <i className="iul uil-file-alt nav__icon"></i> Skills
              </a>
            </li>

            <li className="nav__item">
              <a href="#services" className="nav__link">
                <i className="iul uil-briefcase-alt nav__icon"></i> Services
              </a>
            </li>

            <li className="nav__item">
              <a href="#contact" className="nav__link">
                <i className="iul uil-message nav__icon"></i> Contact
              </a>
            </li>
          </ul>

          <i class="uil uil-times nav__close" onClick={() => showMenu(!Toggle)}></i>
        </div>

        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <i class="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header