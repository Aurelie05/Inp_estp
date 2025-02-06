import React, { useState } from 'react';
import { useForm } from '@inertiajs/react';
import Authenticated from '@/Layouts/AuthenticatedLayout';

export default function InformationForm() {
    const { data, setData, post, processing, errors } = useForm({
        titre: '',
        image: null as File | null,
        nom_image: '',
        description: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post('/information'); // Le route pour soumettre le formulaire
    };

    return (
        <Authenticated>
            <div className="p-6">
                <h1 className="text-xl font-bold mb-4">Ajouter Information</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="titre" className="block">Titre</label>
                        <input
                            type="text"
                            id="titre"
                            value={data.titre}
                            onChange={(e) => setData('titre', e.target.value)}
                            className="border p-2 w-full"
                        />
                        {errors.titre && <span className="text-red-500">{errors.titre}</span>}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="image" className="block">Image</label>
                        <input
                            type="file"
                            id="image"
                            onChange={(e) => {
                                if (e.target.files && e.target.files[0]) {
                                    setData('image', e.target.files[0]); // Stocke le fichier sélectionné
                                }
                            }}
                            className="border p-2 w-full"
                        />
                        {errors.image && <span className="text-red-500">{errors.image}</span>}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="nom_image" className="block">Nom de l'image</label>
                        <input
                            type="text"
                            id="nom_image"
                            value={data.nom_image}
                            onChange={(e) => setData('nom_image', e.target.value)}
                            className="border p-2 w-full"
                        />
                        {errors.nom_image && <span className="text-red-500">{errors.nom_image}</span>}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="description" className="block">Description</label>
                        <textarea
                            id="description"
                            value={data.description}
                            onChange={(e) => setData('description', e.target.value)}
                            className="border p-2 w-full"
                        />
                        {errors.description && <span className="text-red-500">{errors.description}</span>}
                    </div>

                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded"
                        disabled={processing}
                    >
                        {processing ? 'Envoi...' : 'Soumettre'}
                    </button>
                </form>
            </div>
        </Authenticated>
    );
}
