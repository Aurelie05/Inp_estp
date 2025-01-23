import { PageProps } from '@/types';
import { Head, Link } from '@inertiajs/react';
import Guest from '@/Layouts/GuestLayout';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '@/Style/Welcome.css'
import slide1 from '@/Assets/fille.jpg'
import { MdOutlinePlace } from "react-icons/md";
import { FaArrowDown } from "react-icons/fa";
import { FaRegCalendarCheck } from "react-icons/fa6";
import slide2 from '@/Assets/image1 (4).jpg'
import table from '@/Assets/INP-HB_files/ESTP.42cfd471c3b024fce655.png'
import Footer from '@/Layouts/Footer';
import image2 from '@/Assets/INP-HB_files/cycles.png'
import image3 from '@/Assets/INP-HB_files/cycle3.jpg'
import image4 from '@/Assets/INP-HB_files/cycles2.png'
import event1 from '@/Assets/event1.jpg'
import event2 from '@/Assets/event2.jpg'
import event3 from '@/Assets/event3.jpg'

export default function Welcome({
    auth,
    laravelVersion,
    phpVersion,
}: PageProps<{ laravelVersion: string; phpVersion: string }>) {
    const handleImageError = () => {
        document
            .getElementById('screenshot-container')
            ?.classList.add('!hidden');
        document.getElementById('docs-card')?.classList.add('!row-span-1');
        document
            .getElementById('docs-card-content')
            ?.classList.add('!flex-row');
        document.getElementById('background')?.classList.add('!hidden');
    };
    
        const settings = {
          dots: true,              // Affiche les points de navigation
          infinite: true,          // Boucle infinie
          speed: 500,              // Vitesse de transition en ms
          slidesToShow: 1,         // Nombre de slides visibles en même temps
          slidesToScroll: 1,       // Nombre de slides à faire défiler à chaque fois
          autoplay: true,          // Active le défilement automatique
          autoplaySpeed: 3000,     // Intervalle entre chaque défilement automatique
        };

        
          const events = [
            {
              id: 1,
              image: event1, // Remplace par l'URL de l'image
              date: "01 Janvier 2025",
              location: "Lieu 1",
              description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            },
            {
              id: 2,
              image: event2, // Remplace par l'URL de l'image
              date: "15 Février 2025",
              location: "Lieu 2",
              description: "Sapiente nisi obcaecati corrupti.",
            },
            {
              id: 3,
              image: event3, // Remplace par l'URL de l'image
              date: "20 Mars 2025",
              location: "Lieu 3",
              description: "Lorem ipsum dolor sit amet consectetur.",
            },
          ];

    return (
        <Guest>
            <Head title="Welcome" />
            <div className='welcomecontainer'>
                <div className='imageslider'>
                    <Slider {...settings}>
                        <div>
                            <img src={slide1} alt="" />
                        </div>
                        <div>
                            <img src={slide2} alt="" />
                        </div>

                    </Slider>
                    

                </div>
                <div className="text-box">
            <h1>
                <span className="line2"></span>
                PRESENTATION
            </h1>
            <p>
                Crée en 1963, l'Ecole Nationale Supérieure des Travaux Publics (ENSTP) initialement à Abidjan a été transférée à Yamoussoukro en 1979. À la faveur de la restructuration des grandes écoles de Yamoussoukro en 1996, l'INP-HB a été créé. Il regroupe huit (08) grandes écoles dont l'Ecole Supérieure des Travaux Publics (ESTP). Transfuge de l'ex-ENSTP, l'ESTP est chargée d'assurer la formation initiale dans le domaine du Génie Civil.
            </p>
            <p>
                L'ESTP a pour mission :
            </p>
            <ul>
                <li>la Formation initiale de Techniciens Supérieurs et d'Ingénieurs dans les domaines du Génie Civil et de toutes spécialités connexes.</li>
                <li>la Production</li>
                <li>la Prestation et expertise pour les entreprises et les collectivités locales</li>
            </ul>
            <button className="voir-plus-btn" onClick={ () => window.open('/presentation','_self')}>
                Voir plus
            </button>
        </div>

                <div className="events-container">
                    <h1 className="events-title">
                    
                        <span className="line2"></span>
                    
                        NOS EVENEMENTS</h1>
                    <div className="events-cards">
                        {events.map((event) => (
                        <div key={event.id} className="event-card">
                            <img src={event.image} alt="Event" className="event-image" />
                            <div className="event-details">
                            <div className="event-info">
                                <span className="event-date">📅 {event.date}</span>
                                <span className="event-location">📍 {event.location}</span>
                            </div>
                            <p className="event-description">{event.description}</p>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
                
                
                <div className='box4'>
                    <h2>
                        <span className="line2"></span>
                            CYCLES DE FORMATION
                    </h2>
                    <div className='boximage'>
                        <img src={image2} alt="" />
                    </div>
                    <div className='boxliste'>
                        <p>
                            <h1>Cycle Technicien Supérieur</h1>
                            <ul>
                                <li> Technicien Supérieur spécialité Bâtiment et Urbanisme</li>
                                <li>Technicien Supérieur spécialité Hydraulique et Environnement</li>
                                <li>Technicien Supérieur spécialité Routes et Transports</li>
                                <li>Technicien Supérieur spécialité Géomètre</li>
                            </ul>
                        </p>
                    </div>
                </div>
                <div className='box5'>
                
                    <div className='boximage2'>
                        <img src={image3} alt="" />
                    </div>
                    <div className='boxliste'>
                        <p>
                            <h1>Cycle Ingenieur</h1>
                            <ul>
                                <li> Technicien Supérieur spécialité Bâtiment et Urbanisme</li>
                                <li>Technicien Supérieur spécialité Hydraulique et Environnement</li>
                                <li>Technicien Supérieur spécialité Routes et Transports</li>
                                <li>Technicien Supérieur spécialité Géomètre</li>
                            </ul>
                        </p>
                    </div>
                </div>

                <div className='box6'>
                    <h2>
                        <span className="line2"></span>
                        COMMENT INTEGRER NOTRE ECOLE
                    </h2>
                    <div className='boximage2'>
                        <img src={image4} alt="" />
                    </div>
                    <div className='boxliste'>
                        <p>
                            <h1>Cycle des Ingénieurs de conception</h1>
                            <b>Concours Génie Mécanique, Énergétique et Civil (GMEC)</b><br />
                            Le concours est ouvert aux classes préparatoires 
                            technologiques 2ème année, aux titulaires d'un DUT ou d'un
                            DTS d'une des spécialités du concours GMEC ou aux titulaires
                            d'un DEUG option Mathématiques et Physique...
                        </p>
                    </div>
                </div>

                <div className='box7'>
                    
                    <div className='boximage2'>
                        <img src={image2} alt="" />
                    </div>
                    <div className='boxliste'>
                        <p>
                            <h1>Cycle des Techniciens Supérieurs</h1>
                            <b>Concours Génie Civil (GMEC)</b><br />
                            Le concours ouvert aux titulaires d'un 
                            Baccalauréat série C, D, E, F4 et ou d'un BT 
                            de l'année en cours....
                        </p>
                    </div>
                </div>
                

                </div>

            <Footer></Footer>
        </Guest>
    );
}
