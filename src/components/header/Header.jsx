import React, { useState } from "react";
import "./header.css";

export const Header = () => {
  const [toggle, setToggle] = useState(false);

  // alert de button em construção
  const toggleTheme = () => {
    alert("Aguarde... Em fase de construção!")
  }

  // Inicio da tentativa de dark mode
  // quando rever esta demanda, utilizar este import
  // import React, { useLayoutEffect, useState } from "react";

  // const header = document.querySelector(".header");
  // const themeButton = document.getElementById("theme-button");

  // const darkTheme = "dark-theme";
  // const iconTheme = "uil-sun";

  // const getCurrentTheme = () =>
  //   document.body.classList.contains(darkTheme) ? "dark" : "light";
  // const getCurrentIcon = () =>
  //   themeButton.classList.contains(iconTheme) ? "uil-moon" : "uil-sun";

  // useLayoutEffect(() => {
  //   window.addEventListener("scroll", function () {
  //     if (this.scrollY >= 80) header.classList.add("scroll-header");
  //     else header.classList.remove("scroll-header");
  //   });
  // }, []);

  // debugger

  // useLayoutEffect(() => {
  //   themeButton?.addEventListener("click", function () {
  //     debugger
  //     const selectedTheme = localStorage.getItem("selected-theme");
  //     const selectedIcon = localStorage.getItem("selected-icon");

  //     if (selectedTheme) {
  //       document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
  //         darkTheme
  //       );

  //       themeButton.classList[selectedIcon === "uil-moon" ? "add" : "remove"](
  //         iconTheme
  //       );
  //     }

  //     localStorage.setItem("selected-theme", getCurrentTheme());
  //     localStorage.setItem("selected-icon", getCurrentIcon());
  //   });
  // }, [themeButton]);

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

        <div className="nav__button">
          <a className="nav__button-icon" onClick={() => toggleTheme()} target="noreferrer">
            <i class="uil uil-sun"></i>
          </a>
        </div>

        <div className="nav__toggle" onClick={() => setToggle((t) => !t)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;