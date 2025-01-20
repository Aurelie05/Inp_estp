import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';
// import Footer from "@/Layouts/Footer";
import { PropsWithChildren } from 'react';
import { useEffect, useState } from "react";
import logo from '@/Assets/ESTP.f30db3437790b8dbc7d7.png'
import '@/Style/Guest.css'

export default function Guest({ children }: PropsWithChildren) {
    

    const [isVisible, setIsVisible] = useState(true); // Contrôle de la visibilité de la navbar
    const [lastScrollY, setLastScrollY] = useState(0); // Dernière position de scroll

    const handleScroll = () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY) {
            setIsVisible(false); // Cacher la navbar si on défile vers le bas
        } else {
            setIsVisible(true); // Afficher la navbar si on remonte
        }
        setLastScrollY(currentScrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollY]);

    return (
        <div className='container'>
            <div className={`navbar ${isVisible ? "visible" : "hidden"}`}>
                <div className='logosection'>
                    <img src={logo} alt="" />
                </div>
                <div className='menusection'>
                    <div className='menu1' onClick={ () => window.open('/','_self')}>Accueil</div>
                    <div className='menu1' onClick={ () => window.open('/presentation','_self')}>Présentation</div>
                    <div className='menu1' onClick={ () => window.open('/ecole','_self')}>Filieres</div>
                    <div className='menu1' onClick={ () => window.open('/partenaire','_self')}>Partenaires</div>
                    <div className='menu1' onClick={ () => window.open('/actualités','_self')}>Actualités</div>
                    <div className='menu1' >Offres de stage</div>
                </div>
            </div>



            <div className='guestchildren'>
                {children}
            </div>
            
        </div>
    );
}
