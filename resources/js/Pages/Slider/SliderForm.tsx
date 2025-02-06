import Authenticated from '@/Layouts/AuthenticatedLayout';
import { FormEventHandler, useState } from 'react';
import { Inertia, Method } from '@inertiajs/inertia';
import { useForm } from "@inertiajs/react"; // Importer useForm

export default function SliderForm() {
    // ✅ Utiliser useForm pour gérer l'état du formulaire
    const { data, setData, post, reset, errors } = useForm({
        titre: "",
        image: null as File | null,
    });

    const submit: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();

        // ✅ Envoi des données avec useForm
        post("/sliders", {
            preserveScroll: true, // Évite le scroll en haut après soumission
            onSuccess: () => {
                console.log("Slider ajouté avec succès");
                
                // ✅ Redirection sans rechargement
                Inertia.visit("/sliders", { method: "get" as Method, preserveState: true });

                // ✅ Réinitialiser le formulaire
                reset();
            },
        });
    };
    return (
        <Authenticated>
            <div className="p-6">
                <h1 className="text-xl font-bold mb-4">Add Slider</h1>
                <form onSubmit={submit} encType="multipart/form-data" className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Title</label>
                        <input
                            type="text"
                            value={data.titre}
                            onChange={(e) => setData('titre',e.target.value)}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                        />
                        {errors.titre && <p className="text-red-500 text-sm">{errors.titre}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Image</label>
                        <input
                            type="file"
                            onChange={(e) => setData('image', e.target.files?.[0] || null)}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                        />
                        {errors.image && <p className="text-red-500 text-sm">{errors.image}</p>}
                    </div>

                    <button 
                        type="submit" 
                        className="bg-blue-500 text-white px-4 py-2 rounded transition-transform transform hover:scale-105 active:scale-95"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </Authenticated>
    );
}
