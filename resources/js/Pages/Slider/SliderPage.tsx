import { Link } from '@inertiajs/react';
import { usePage } from "@inertiajs/react";
import Authenticated from '@/Layouts/AuthenticatedLayout';
import '@/Style/SliderPage.css';

interface Slider {
    id: number;
    titre: string;
    image: string;
}

export default function SliderPage() {  
    const { slider = [] } = usePage().props as { slider?: Slider[] }; // Récupère les données depuis Inertia
    
    console.log('Valeur de slider:', slider);  // Vérifie que les données sont bien reçues

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
                        slider.map((item) => (
                            <li key={item.id} className="mb-4">
                                <h3 className="font-semibold">{item.titre}</h3>
                                <img
                                    src={`/storage/${item.image}`}
                                    alt={item.titre}
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
