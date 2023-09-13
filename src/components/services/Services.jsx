import React, { useState } from 'react';
import './services.css'

const Services = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  }
  return (
    <section className="services section" id="services">
      <h2 className="section__title">Experiências</h2>
      <span className="section__subtitle">Services</span>

      <div className="services__container container grid">
        {/* Interfoc */}
        <div className="services__content">
          <div>
            <i className="uil uil-wallet services__icon"></i>
            <h3 className="services__title">Interfoc <br /> Sistemas</h3>
          </div>
          <span className="services__button" onClick={() => toggleTab(4)}>
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
          <div className={toggleState === 4 ? "services__modal active-modal" : "services__modal"} onClick={() => toggleTab(0)}>
            <div className="services__modal-content">
              <i onClick={() => toggleTab(0)} className="uil uil-times services__button-close"></i>
              <h3 className="services__modal-title">Developer Full-Stack</h3>
              <p className="services__modal-description">
                - Correção de Bugs <br />
                - Manutenção de sistemas <br />
                - Sustentação de Sistemas <br />
                - Desenvolvimento de novas funcionalidades <br />
                - Expertise em sistemas de previdência <br />
                <br />
                Competências: SQL · GitFlow · PostgreSQL · API REST · Git · C# · HTML5 · CSS · JavaScript · .NET Framework
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Maio 2023 - Presente</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* M8 Sistemas */}
        <div className="services__content">
          <div>
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">M8 <br /> Sistemas</h3>
          </div>
          <span className="services__button" onClick={() => toggleTab(3)}>
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
          <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"} onClick={() => toggleTab(0)}>
            <div className="services__modal-content">
              <i onClick={() => toggleTab(0)} className="uil uil-times services__button-close"></i>

              <h3 className="services__modal-title">Developer Full-Stack</h3>
              <p className="services__modal-description">
                - Correção de Bugs<br />
                - Manutenção de sistemas<br />
                - Sustentação de Sistemas<br />
                - Desenvolvimento de novas funcionalidades<br />
                - Expertise em sistemas de previdência<br />
                <br />
                Competências: SQL · GitFlow · Azure DevOps Server · API REST · Git · C# · HTML5 · CSS · JavaScript · .NET Framework e ASP NET MVC
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Setembro 2022 - Abril 2023</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Unimed */}
        <div className="services__content">
          <div>
            <i className="uil uil-arrow services__icon"></i>
            <h3 className="services__title">Unimed <br /> Chapecó</h3>
          </div>
          <span className="services__button" onClick={() => toggleTab(2)}>
            View More<i className="uil uil-arrow-right services__button-icon"></i>
          </span>
          <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"} onClick={() => toggleTab(0)}>
            <div className="services__modal-content">
              <i onClick={() => toggleTab(0)} className="uil uil-times services__button-close"></i>
              <h3 className="services__modal-title">Software Developer</h3>
              <p className="services__modal-description">
                - Correção de Bugs<br />
                - Manutenção de sistemas<br />
                - Desenvolvimento de novas funcionalidades<br />
                - Expertise em sistemas de previdência<br />
                <br />
                Competências: SQL · GitFlow · Git · C# · HTML5 · Python · JavaScript
                </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Junho 2022 - Setembro 2022</p>
                </li>
              </ul>

              <h3 className="services__modal-title">Assistente de Segurança (DPO)</h3>
              <p className="services__modal-description">
                Encarregado de Dados (DPO) substituto. Responsável pela implementação
                e adequação dos processos e tecnologias para a Lei Geral de Proteção de Dados (LGPD).
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Jun 2021 - Jun 2022</p>
                </li>
              </ul>
              <h3 className="services__modal-title">Técnico de suporte em TI</h3>
              <p className="services__modal-description">
                Dar suporte aos usuários dos computadores e microinformática, atendendo aos chamados, 
                documentando as atividades, mantendo o solicitante informando sobre o andamento da demanda.
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Jun 2020 - May 2021</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Freelancer */}
        <div className="services__content">
          <div>
            <i className="uil uil-edit services__icon"></i>
            <h3 className="services__title">Freelancer <br /> Web</h3>
          </div>
          <span className="services__button" onClick={() => toggleTab(1)}>
            View More <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
          <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"} onClick={() => toggleTab(0)}>
            <div className="services__modal-content">
              <i onClick={() => toggleTab(0)} className="uil uil-times services__button-close"></i>

              <h3 className="services__modal-title">Visual Designer</h3>
              <p className="services__modal-description">Criação de Sistema de Gestão de empresas de pequeno porte, sistema de autenticação.</p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Março 2020 - Junho 2020</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
