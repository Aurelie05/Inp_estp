import Authenticated from '@/Layouts/AuthenticatedLayout';
import { FormEventHandler } from 'react';
import { Inertia, Method } from '@inertiajs/inertia';
import { useForm } from "@inertiajs/react"; 

export default function EventForm() {
    const { data, setData, post, reset, errors } = useForm({
        titre: "",
        date: "",
        lieu: "",
        description: "",
        image: null as File | null,
    });

    const submit: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();

        post("/events", {
            preserveScroll: true,
            onSuccess: () => {
                console.log("Événement ajouté avec succès");

                Inertia.visit("/events", { method: "get" as Method, preserveState: true });

                reset();
            },
        });
    };

    return (
        <Authenticated>
            <div className="flex justify-center items-center min-h-screen bg-gray-100">
                <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
                    <h1 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Ajouter un Événement</h1>
                    <form onSubmit={submit} encType="multipart/form-data" className="space-y-6">
                        
                        {/* Titre */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Titre</label>
                            <input
                                type="text"
                                value={data.titre}
                                onChange={(e) => setData("titre", e.target.value)}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm px-4 py-2"
                            />
                            {errors.titre && <p className="text-red-500 text-sm">{errors.titre}</p>}
                        </div>

                        {/* Date */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Date</label>
                            <input
                                type="date"
                                value={data.date}
                                onChange={(e) => setData("date", e.target.value)}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm px-4 py-2"
                            />
                            {errors.date && <p className="text-red-500 text-sm">{errors.date}</p>}
                        </div>

                        {/* Lieu */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Lieu</label>
                            <input
                                type="text"
                                value={data.lieu}
                                onChange={(e) => setData("lieu", e.target.value)}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm px-4 py-2"
                            />
                            {errors.lieu && <p className="text-red-500 text-sm">{errors.lieu}</p>}
                        </div>

                        {/* Description */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Description</label>
                            <textarea
                                value={data.description}
                                onChange={(e) => setData("description", e.target.value)}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm px-4 py-2"
                            />
                            {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}
                        </div>

                        {/* Image */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Image</label>
                            <input
                                type="file"
                                onChange={(e) => setData("image", e.target.files?.[0] || null)}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                            />
                            {errors.image && <p className="text-red-500 text-sm">{errors.image}</p>}
                        </div>

                        {/* Bouton de soumission */}
                        <button 
                            type="submit" 
                            className="w-full bg-blue-500 text-white py-2 rounded-md transition-transform transform hover:scale-105 active:scale-95"
                        >
                            Soumettre
                        </button>
                    </form>
                </div>
            </div>
        </Authenticated>
    );
}
