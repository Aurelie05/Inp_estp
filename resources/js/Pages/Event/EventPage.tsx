import { Link, usePage } from '@inertiajs/react';
import Authenticated from '@/Layouts/AuthenticatedLayout';

interface Event {
    id: number;
    titre: string;
    image: string;
    date: string;
    lieu: string;
    description: string;
}

interface ExtendedPageProps {
    auth: { user: { id: number; name: string; email: string } };  // Exemple d'authentification, à adapter si nécessaire
    evenements: Event[];
    [key: string]: any;
}

export default function EventPage() {
    

    const { evenements } = usePage<ExtendedPageProps>().props; // Typage correct ici

    console.log('Valeur de events:', evenements);
    // const { evenements } = usePage().props as { evenements: any[] };

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
