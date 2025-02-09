import { Link } from '@inertiajs/react';
import { usePage } from '@inertiajs/react';
import { Inertia } from '@inertiajs/inertia';
import Authenticated from '@/Layouts/AuthenticatedLayout';
import { useEffect, useState } from 'react'; // Import de useState et useEffect

interface Evenement {
    id: number;
    titre: string;
    image: string;
    date: string;
    lieu: string;
    description: string;
  }
// interface ExtendedPageProps {
//     auth: { user: { id: number; name: string; email: string } };  
//     evenements: Event[];
//     [key: string]: any;
// }


export default function EventPage() {
    

    
    const { evenements = [] } = usePage().props as { evenements?: Evenement[] }; // Récupère les données depuis Inertia
  const [evenementsList, setEvenementsList] = useState<Evenement[]>(evenements); // Initialisez l'état local avec les événements reçus
    console.log('Valeur de events:', evenements);
    // const { evenements } = usePage().props as { evenements: any[] };
    useEffect(() => {
        setEvenementsList(evenements); // Met à jour les événements à chaque changement de `evenements` dans les props
      }, [evenements]);
    

    // Fonction pour gérer la suppression d'un événement
  const handleDelete = (id: number) => {
    if (confirm('Êtes-vous sûr de vouloir supprimer cet événement ?')) {
      // Effectuer la suppression via une requête Inertia
      Inertia.delete(`/events/${id}`, {
        onSuccess: () => {
          // Met à jour l'état local après suppression, en filtrant l'événement supprimé
          setEvenementsList(evenementsList.filter((event) => event.id !== id));
        },
      });
    }
  };


    return (
        <Authenticated>
            <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-xl font-bold">Événements</h1>
                    <Link
                        href="/events/create"
                        className="bg-blue-500 text-white px-4 py-2 rounded"
                    >
                        Add Event
                    </Link>
                </div>

                <ul>
                    {evenements.length > 0 ? (
                        evenements.map((event) => (
                            <li key={event.id} className="mb-4 border p-4 rounded shadow">
                                <h3 className="font-semibold">{event.titre}</h3>
                                <img
                                    src={`/storage/${event.image}`}
                                    alt={event.titre}
                                    className="w-full max-w-sm rounded"
                                />

                                <p><strong>Date:</strong> {event.date}</p>
                                <p><strong>Lieu:</strong> {event.lieu}</p>
                                <p>{event.description}</p>
                                <div className="flex justify-between items-center">
                                    <button
                                        onClick={() => handleDelete(event.id)} // Appeler la fonction de suppression
                                        className="text-white bg-red-500 px-4 py-2 rounded hover:bg-red-600"
                                    >
                                        Supprimer
                                    </button>
                                </div>
                            </li>
                        ))
                    ) : (
                        <p>Aucun événement disponible.</p>
                    )}
                </ul>
            </div>
        </Authenticated>
    );
}
