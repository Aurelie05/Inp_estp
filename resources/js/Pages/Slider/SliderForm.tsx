import Authenticated from '@/Layouts/AuthenticatedLayout';
import { FormEventHandler, useState } from 'react';
import { Inertia, Method } from '@inertiajs/inertia';
import { useForm } from "@inertiajs/react"; // Importer useForm

export default function SliderForm() {
    const { data, setData, post, reset, errors } = useForm({
        titre: "",
        image: null as File | null,
    });

    const submit: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();

        post("/sliders", {
            preserveScroll: true,
            onSuccess: () => {
                console.log("Slider ajouté avec succès");

                // Redirection sans rechargement
                Inertia.visit("/sliders", { method: "get" as Method, preserveState: true });

                // Réinitialiser le formulaire
                reset();
            },
        });
    };

    return (
        <Authenticated>
            <div className="flex justify-center items-center min-h-screen bg-gray-100">
                <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
                    <h1 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Add Slider</h1>
                    <form onSubmit={submit} encType="multipart/form-data" className="space-y-6">
                        
                        {/* Titre */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Title</label>
                            <input
                                type="text"
                                value={data.titre}
                                onChange={(e) => setData('titre', e.target.value)}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm px-4 py-2"
                            />
                            {errors.titre && <p className="text-red-500 text-sm">{errors.titre}</p>}
                        </div>

                        {/* Image */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Image</label>
                            <input
                                type="file"
                                onChange={(e) => setData('image', e.target.files?.[0] || null)}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                            />
                            {errors.image && <p className="text-red-500 text-sm">{errors.image}</p>}
                        </div>

                        {/* Bouton de soumission */}
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-2 rounded-md transition-transform transform hover:scale-105 active:scale-95"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </Authenticated>
    );
}
