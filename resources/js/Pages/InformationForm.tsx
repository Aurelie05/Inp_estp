import React from 'react';
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
        post('/information');
    };

    return (
        <Authenticated>
            <div className="flex justify-center items-center min-h-screen bg-gray-100">
                <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
                    <h1 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Ajouter Information</h1>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        
                        {/* Titre */}
                        <div>
                            <label htmlFor="titre" className="block text-sm font-medium text-gray-700">Titre</label>
                            <input
                                type="text"
                                id="titre"
                                value={data.titre}
                                onChange={(e) => setData('titre', e.target.value)}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm px-4 py-2"
                            />
                            {errors.titre && <span className="text-red-500 text-sm">{errors.titre}</span>}
                        </div>

                        {/* Image */}
                        <div>
                            <label htmlFor="image" className="block text-sm font-medium text-gray-700">Image</label>
                            <input
                                type="file"
                                id="image"
                                onChange={(e) => {
                                    if (e.target.files && e.target.files[0]) {
                                        setData('image', e.target.files[0]);
                                    }
                                }}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                            />
                            {errors.image && <span className="text-red-500 text-sm">{errors.image}</span>}
                        </div>

                        {/* Nom de l'image */}
                        <div>
                            <label htmlFor="nom_image" className="block text-sm font-medium text-gray-700">Nom de l'image</label>
                            <input
                                type="text"
                                id="nom_image"
                                value={data.nom_image}
                                onChange={(e) => setData('nom_image', e.target.value)}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm px-4 py-2"
                            />
                            {errors.nom_image && <span className="text-red-500 text-sm">{errors.nom_image}</span>}
                        </div>

                        {/* Description */}
                        <div>
                            <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                            <textarea
                                id="description"
                                value={data.description}
                                onChange={(e) => setData('description', e.target.value)}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm px-4 py-2"
                            />
                            {errors.description && <span className="text-red-500 text-sm">{errors.description}</span>}
                        </div>

                        {/* Bouton de soumission */}
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-2 rounded-md transition-transform transform hover:scale-105 active:scale-95"
                            disabled={processing}
                        >
                            {processing ? 'Envoi...' : 'Soumettre'}
                        </button>
                    </form>
                </div>
            </div>
        </Authenticated>
    );
}
