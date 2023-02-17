import React, { useState } from 'react';
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  }
  return (
    <section className="qualification section">
      <h2 className="section__title">Qualificações</h2>
      <span className="section__subtitle">My personel journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div className={toggleState === 1 ? "qualification__button qualification__active button--flex"
            : "qualification__button button--flex"}
            onClick={() => toggleTab(1)}>
            <i className="uil uil-graduation-cap qualification__icon"></i>Educação
          </div>

          <div className={toggleState === 2 ? "qualification__button qualification__active button--flex"
            : "qualification__button button--flex"}
            onClick={() => toggleTab(2)}>
            <i className="uil uil-briefcase-alt qualification__icon"></i>Qualificações
          </div>
        </div>

        <div className="qualification__sections">

          <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Inglês - Avançado</h3>
                <span className="qualification__subtitle">News Escola de Idiomas</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2010 - 2017
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Programação</h3>
                <span className="qualification__subtitle">CDI - Informática</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2013-2013
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Montagem e Manut.</h3>
                <span className="qualification__subtitle">CDI - Informática</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2014-2014
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Espanhol - Básico</h3>
                <span className="qualification__subtitle">News Escola de Idiomas</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2017 - 2017
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>

                <h3 className="qualification__title">Ciências da Computação - Bacharel</h3>
                <span className="qualification__subtitle">UFFS</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2021 - Presente
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

          </div>

          <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">DPO & LGPD na Prática</h3>
                <span className="qualification__subtitle">KA Solution</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>16 Horas
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Privacy e Data Protection Essentials</h3>
                <span className="qualification__subtitle">IDESP</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 20 Horas
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">C# COMPLETO Programação Orientada a Objetos + Projetos</h3>
                <span className="qualification__subtitle">Udemy</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>38 Horas
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">ASP.NET MVC</h3>
                <span className="qualification__subtitle">Code21</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>40 Horas
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Qualification
