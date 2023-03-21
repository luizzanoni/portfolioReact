import React, { useState } from "react";
import "./header.css";

export const Header = () => {
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (this.scrollY >= 80) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header")
  })
  const [toggle, setToggle] = useState(false);

  // alert de button em construção
  // const toggleTheme = () => {
  //   alert("Aguarde... Em fase de construção!")
  // }

  return (
    <header className="header">
      <nav className="nav container">
        <a href="#home" className="nav__logo">
          Luiz Gustavo Zanoni | DEV
        </a>

        <div className={toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="#home" className="nav__link">
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

          <i className="uil uil-times nav__close" onClick={() => setToggle((t) => !t)}></i>
        </div>

        {/* <div className="nav__button">
          <a className="nav__button-icon" onClick={() => toggleTheme()} target="noreferrer">
            <i class="uil uil-sun"></i>
          </a>
        </div>

        <div className="nav__toggle" onClick={() => setToggle((t) => !t)}>
          <i className="uil uil-apps"></i>
        </div> */}
      </nav>
    </header>
  );
};

export default Header;