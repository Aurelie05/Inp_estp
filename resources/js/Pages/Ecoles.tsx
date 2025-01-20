import Guest from '@/Layouts/GuestLayout';
// import Footer from '@/Layouts/Footer';
import { FaCircleArrowDown } from "react-icons/fa6";
import logo from '@/Assets/ESTP.f30db3437790b8dbc7d7.png'
import React from 'react';
import '@/Style/Ecoles.css';

const Ecoles = () => {
  const schools = [
    { name: "Génie Civil option Bâtiment et Urbanisme", logo: "BAC+3", color: "#2b6f8f" },
    { name: "Routes et Transports", logo: "BAC+3", color: "#2b6f8f"},
    { name: "Hydraulique et Environnement", logo: "BAC+3", color: "#2b6f8f" },
    { name: "Géomètre", logo: "BAC+3", color: "#2b6f8f" }
    
  ];
  const schools2 = [
    { name: "Génie Civil option Bâtiment et Urbanisme", logo: "BAC+5", color: "#2b6f8f" },
    { name: "Génie Civil option Infrastructures et Transports", logo: "BAC+5", color: "#2b6f8f" },
    { name: "Génie Civil option Hydraulique et Environnement", logo: "BAC+5", color: "#2b6f8f" },
    { name: "GéomètreTopographe", logo: "BAC+5", color: "#2b6f8f" }
    
  ];
  const rows = [
    {
      title: "Bâtiment et Urbanisme",
      description:
        "Collectivités locales, Administration pour la planification et la gestion de l’urbanisation des villes, Cabinets d’architecte ou d’urbaniste, Sociétés immobilières, Bureaux d’Études, Bureaux de contrôle, Laboratoire, Chantiers de construction de bâtiments.",
    },
    {
      title: "Géomètre",
      description:
        "Cabinet de géomètre expert, Cadastre, Domaine de la conservation foncière, Bureaux d’études, Entreprises de construction d’ouvrages, Collectivités locales.",
    },
    {
      title: "Hydraulique et Environnement",
      description:
        "Collectivités locales, Administration, Bureaux d’Études et de contrôle, Entreprises de construction (des routes, des ponts, des châteaux d’eau, de l’assainissement, de l’aménagement hydro-agricole).",
    },
    {
      title: "Routes et Transports",
      description:
        "Collectivités locales, Administration, Bureaux d’Études et de Contrôle, Entreprises de construction d’ouvrages.",
    },
    {
      title: "Ingénieur Géomètre Topographe",
      description:
        "Bureaux d’études techniques, Bureau d’études économiques, Entreprises agricoles, Administration (Maitrise d’ouvrage, assistance à maitrise d’ouvrage), Cadastre, Service passation de marché, Collectivités locales, Développement, études et travaux de construction.",
    },
    {
      title: "Ingénieur Travaux Publics",
      description:
        "Bureaux d’études techniques, Bureaux de contrôle et de normalisation des risques, Laboratoires, Administration (Maitrise d’ouvrage, Assistance à maitrise d’ouvrage), Service passation de marché, Management de projets, Collectivités locales, Bureaux d’études économiques, Commercial et études de prix, Développement, Études et travaux de construction.",
    },
  ];

  return (
    <Guest>
      <div className="page-formation-alt">
        <h1>Cycle Technicien Supérieur <FaCircleArrowDown /></h1>
        <div className="schools-list">
          {schools.map((school, index) => (
            <div 
              key={index} 
              className="school-block" 
              style={{ borderLeft: `10px solid ${school.color}` }}
            //   onClick={() => window.location.href = school.path} 
            >
              <div className="school-logo">{school.logo}</div>
              <div className="school-info">
                <h4>{school.name}</h4>
              </div>
            </div>
          ))}
        </div>

        <div className="page-formation-alt2">
        <h1>Cycle Ingénieur<FaCircleArrowDown /></h1>
        <div className="schools-list">
          {schools2.map((school2, index) => (
            <div 
              key={index} 
              className="school-block" 
              style={{ borderLeft: `10px solid ${school2.color}` }}
            //   onClick={() => window.location.href = school2.path} 
            >
              <div className="school-logo">{school2.logo}</div>
              <div className="school-info">
                <h4>{school2.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>

        <div className='box8'>
                    <h2>
                        Débouchés <FaCircleArrowDown />
                    </h2>
                    <div className="table-container">
                        {rows.map((row, index) => (
                            <div className="table-row" key={index}>
                            <div className="table-title">{row.title}</div>
                            <div className="table-description">{row.description}</div>
                            </div>
                        ))}
                    </div>
        </div>
    </div>



        <footer className="footer-container">
      <div className="footer-section">
        <h3>ECOLE SUPERIEURE DES TRAVAUX PUBLICS</h3>
        <ul>
          <li>Contacts</li>
          <li>Adresse électronique</li>
          <li>Nous suivre sur les réseaux</li>
        </ul>
      </div>

      <div className="footer-center">
        <img src={logo} alt="Logo ESTP" className="footer-logo" />
        <p>Newsletter</p>
        <div className="newsletter-container">
          <input type="email" placeholder="Votre email" className="newsletter-input" />
          <button className="newsletter-button">SOUMETTRE</button>
        </div>
      </div>

      <div className="footer-section">
        <h3>NOS PARTENAIRES</h3>
        <ul>
          <li>Contacts</li>
          <li>Adresse électronique</li>
          <li>Nous suivre sur les réseaux</li>
        </ul>
        </div>
    
      <div className="footer-bottom">
        <p>By INP-HB Digital Copyright © 2025</p>
      </div>
    </footer>            
      {/* <Footer></Footer> */}
    </Guest>
  );
};

export default Ecoles;
