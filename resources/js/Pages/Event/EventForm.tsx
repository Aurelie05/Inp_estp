import Authenticated from '@/Layouts/AuthenticatedLayout';
import { FormEventHandler } from 'react';
import { Inertia, Method } from '@inertiajs/inertia';
import { useForm } from "@inertiajs/react"; 

export default function EventForm() {
    // ✅ Utilisation de useForm pour gérer les données
    const { data, setData, post, reset, errors } = useForm({
        titre: "",
        date: "",
        lieu: "",
        description: "",
        image: null as File | null,
    });

    const submit: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();

        // ✅ Envoi des données via Inertia.js
        post("/events", {
            preserveScroll: true, 
            onSuccess: () => {
                console.log("Événement ajouté avec succès");

                // ✅ Redirection sans rechargement
                Inertia.visit("/events", { method: "get" as Method, preserveState: true });

                // ✅ Réinitialisation du formulaire
                reset();
            },
        });
    };

    return (
        <Authenticated>
            <div className="p-6">
                <h1 className="text-xl font-bold mb-4">Ajouter un Événement</h1>
                <form onSubmit={submit} encType="multipart/form-data" className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Titre</label>
                        <input
                            type="text"
                            value={data.titre}
                            onChange={(e) => setData("titre", e.target.value)}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                        />
                        {errors.titre && <p className="text-red-500 text-sm">{errors.titre}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Date</label>
                        <input
                            type="date"
                            value={data.date}
                            onChange={(e) => setData("date", e.target.value)}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                        />
                        {errors.date && <p className="text-red-500 text-sm">{errors.date}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Lieu</label>
                        <input
                            type="text"
                            value={data.lieu}
                            onChange={(e) => setData("lieu", e.target.value)}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                        />
                        {errors.lieu && <p className="text-red-500 text-sm">{errors.lieu}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Description</label>
                        <textarea
                            value={data.description}
                            onChange={(e) => setData("description", e.target.value)}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                        />
                        {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Image</label>
                        <input
                            type="file"
                            onChange={(e) => setData("image", e.target.files?.[0] || null)}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                        />
                        {errors.image && <p className="text-red-500 text-sm">{errors.image}</p>}
                    </div>

                    <button 
                        type="submit" 
                        className="bg-blue-500 text-white px-4 py-2 rounded transition-transform transform hover:scale-105 active:scale-95"
                    >
                        Soumettre
                    </button>
                </form>
            </div>
        </Authenticated>
    );
}
