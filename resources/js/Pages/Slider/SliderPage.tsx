import { Link } from '@inertiajs/react';
import { usePage } from '@inertiajs/react';
import { Inertia } from '@inertiajs/inertia';
import { useEffect, useState } from 'react'; // Import de useState et useEffect
import Authenticated from '@/Layouts/AuthenticatedLayout';
import '@/Style/SliderPage.css';

interface Slider {
  id: number;
  titre: string;
  image: string;
}

export default function SliderPage() {
  const { slider = [] } = usePage().props as { slider?: Slider[] }; // Récupère les données depuis Inertia
  const [sliders, setSliders] = useState<Slider[]>(slider); // Initialisez l'état local avec les sliders reçus

  
  // Fonction pour gérer la suppression d'un slider
  const handleDelete = (id: number) => {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce slider ?')) {
      // Effectuer la suppression via une requête Inertia
      Inertia.delete(`/sliders/${id}`, {
        onSuccess: () => {
          // Met à jour l'état local après suppression, en filtrant le slider supprimé
          Inertia.visit('/SliderPage');
        },
      });
    }
  };

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
          {sliders.length > 0 ? (
            sliders.map((item) => (
              <li key={item.id} className="mb-4">
                <h3 className="font-semibold">{item.titre}</h3>
                <img
                  src={`/storage/${item.image}`}
                  alt={item.titre}
                  className="w-full max-w-sm rounded"
                />
                <div className="flex justify-between items-center">
                  <button
                    onClick={() => handleDelete(item.id)} // Appeler la fonction de suppression
                    className="text-white bg-red-500 px-4 py-2 rounded hover:bg-red-600"
                  >
                    Supprimer
                  </button>
                </div>
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
