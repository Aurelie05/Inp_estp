import Authenticated from '@/Layouts/AuthenticatedLayout';
import { FormEventHandler, useState } from 'react';
import { Inertia } from '@inertiajs/inertia';

export default function SliderForm() {
    const [titre, setTitre] = useState('');
    const [image, setImage] = useState<File | null>(null);
    const [errors, setErrors] = useState<{ titre?: string; image?: string }>({});

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('titre', titre);
        if (image) {
            formData.append('image', image);
        }

        // Utilisation d'Inertia.post pour soumettre le formulaire
        Inertia.post('/sliders', formData, {
            onError: (errors) => {
                console.error('Erreurs:', errors); // Affiche les erreurs dans la console
                setErrors(errors); // Mets à jour les erreurs dans l'état local
            },
            onSuccess: () => {
                console.log('Slider ajouté avec succès');
                setTitre(''); // Réinitialise le titre
                setImage(null); // Réinitialise l'image
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
                            value={titre}
                            onChange={(e) => setTitre(e.target.value)}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                        />
                        {errors.titre && (
                            <p className="text-red-500 text-sm">{errors.titre}</p>
                        )}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Image</label>
                        <input
                            type="file"
                            onChange={(e) => setImage(e.target.files?.[0] || null)}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                        />
                        {errors.image && (
                            <p className="text-red-500 text-sm">{errors.image}</p>
                        )}
                    </div>

                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </Authenticated>
    );
}
