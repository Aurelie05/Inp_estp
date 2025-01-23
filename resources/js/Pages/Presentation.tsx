import React from "react";
import logo from '@/Assets/ESTP.f30db3437790b8dbc7d7.png'
import Guest from '@/Layouts/GuestLayout';
import '@/Style/Presentation.css'
import Slider from "react-slick";
import image from "@/Assets/SiteSud.8d60a40fc4177a07cebc.jpg"
import image2 from '@/Assets/INP-HB_files/ESTP.6022a53348fd04e97539.png'
import slide1 from '@/Assets/SiteSud3.5deff3c7f79f2664d30c.jpg'
import slide2 from '@/Assets/SiteSud4.287cfcf705cf36fa10d2.jpg'
import slide3 from '@/Assets/SiteSud6.df1e344005c77a58d5a5.jpg'


const Presentation = () => {
  const settings = {
    dots: true, // Affiche des points de navigation
    infinite: true, // Slider infini
    speed: 500, // Vitesse de transition
    slidesToShow: 1, // Nombre d'images visibles
    slidesToScroll: 1, // Défilement d'une image à la fois
    centerMode: true, // Centre le slider
    centerPadding: "0", // Pas de marge supplémentaire
    arrows: false, // Désactive les flèches
  };

  const images = [
    {
      // id: 1,
      src: slide1,
      alt: "Image 1",
    },
    {
      // id: 2,
      src: slide2,
      alt: "Image 2",
    },
    {
      // id: 3,
      src: slide2,
      alt: "Image 3",
    },
  ];
  return (
    <div className="presentation-container">
      {/* Composant Guest */}
      <Guest />

      {/* Section avec l'image floutée */}
      <div className="blurred-image-container">
            <img
            src={image} // Remplace par l'URL de ton image
            alt="Background"
            className="background-image"
            />
            <div className="overlay"></div>
      </div>
     <div className="presentation-section">
      <div className="director-container">
        {/* Image du Directeur */}
        <div className="director-image">
          <img
            src={image2} // Remplacez par le lien de l'image réelle
            alt="Dr. Denis KONAN"
            className="director-photo"
          />
          <h3 className="director-name">Dr. Denis KONAN</h3>
        </div>

        {/* Contenu du texte */}
        <div className="director-content">
          <h2 className="director-title">Mot du Directeur</h2>
          <p className="director-text">
            Tout pays ou toute nation, quel que soit son niveau de développement, a besoin de femmes et d'hommes
            compétents dans le domaine du Génie Civil, car cette discipline fait partie intégrante de toute
            civilisation. À l'instar de la quasi-totalité des pays africains, notre pays la Côte d'Ivoire qui est en
            pleine construction aura toujours besoin de techniciens expérimentés dans ce domaine pour asseoir son
            développement...
          </p>
        </div>
      </div>

      {/* <div className="text2">
        <h1><span className="line2"></span>Les sites de l ESTP</h1>
      </div> */}
    </div>

    {/* <div className="slider-container">
      <h2 className="slider-title">SITE CENTRE</h2>
      <Slider {...settings}>
        {images.map((image) => (
          <div  className="slider-item">
            <img src={image.src} alt={image.alt} className="slider-image" />
          </div>
        ))}
      </Slider>
    </div> */}



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
    </div>
  );
};

export default Presentation;
