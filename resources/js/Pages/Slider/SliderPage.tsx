import { Link } from '@inertiajs/react';
import { usePage } from "@inertiajs/react";
import Authenticated from '@/Layouts/AuthenticatedLayout';
import '@/Style/SliderPage.css'

interface Slider {
    id: number;
    titre: string;
    image: string;
}

interface Props {
    slider: Slider[];  // Liste des sliders passée depuis Inertia
    csrf_token: string;  // CSRF token
}

export default function SliderPage({ slider = [] }: Props) {  // Valeur par défaut vide pour sliders

    const { sliders } = usePage().props; // Récupère les données depuis le backend
    
    console.log('Valeur de slider:', slider);
    return (
        <Authenticated>
            <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-xl font-bold">Sliders</h1>
                    <Link
                        href="/sliders/create"
                        className="bg-blue-500 text-white px-4 py-2 rounded"
                    >
                        Add Slider
                    </Link>
                </div>

                <ul>
                    {slider.length > 0 ? (
                        slider.map((slider) => (
                            <li key={slider.id} className="mb-4">
                                <h3 className="font-semibold">{slider.titre}</h3>
                                <img
                                    src={`/storage/${slider.image}`}
                                    alt={slider.titre}
                                    className="w-full max-w-sm rounded"
                                />
                            </li>
                        ))
                    ) : (
                        <p>Aucun slider disponible pour le moment.</p>
                    )}
                </ul>
            </div>
        </Authenticated>
    );
}
