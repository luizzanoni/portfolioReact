import React from 'react';
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Luiz Gustavo Zanoni | DEV</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">About</a>
          </li>

          <li>
            <a href="#portfolio" className="footer__link">Projects</a>
          </li>

          <li>
            <a href="#contact" className="footer__link">Contatos</a>
          </li>

        </ul>

        <div className="footer__social">

          <a href="https://www.instagram.com/luiz.gzanoni/" className="footer__social-link" target="noreferrer">
            <i class="bx bxl-instagram"></i>
          </a>

          <a href="https://wa.me/5549999241385" className="footer__social-link" target="noreferrer">
            <i class="bx bxl-whatsapp"></i>
          </a>

          <a href="https://github.com/luizzanoni" className="footer__social-link" target="noreferrer">
            <i class="bx bxl-github"></i>
          </a>

          <a href="https://twitter.com/luiz_gzanoni" className="footer__social-link" target="noreferrer">
            <i class="bx bxl-twitter"></i>
          </a>
        </div>

        <span className='footer__copy'>
          &#169; Crypticalcoder. All rigths reserved
        </span>
      </div>
    </footer>
  )
}

export default Footer