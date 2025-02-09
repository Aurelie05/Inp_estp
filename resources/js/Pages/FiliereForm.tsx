import Authenticated from '@/Layouts/AuthenticatedLayout';
import { FormEventHandler } from 'react';
import { Inertia, Method } from '@inertiajs/inertia';
import { useForm } from "@inertiajs/react"; 

export default function FiliereForm({ cycles = [], filieres = [] }: { cycles?: string[], filieres?: { cycle: string, id: string, nom_filiere: string }[] }) {
    const { data, setData, post, reset, errors } = useForm({
        cycle: "",
        nom_filiere: "",
        debouchés: "",
    });

    const handleSubmit: FormEventHandler = (e) => {
        e.preventDefault();
        post('/filieres'); // Le route pour soumettre le formulaire
    };

    const uniqueCycles = [...new Set(filieres.map(filiere => filiere.cycle))];

    return (
        <Authenticated>
            <div className="flex justify-center items-center min-h-screen bg-gray-100">
                <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
                    <h1 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Ajouter une Filière</h1>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        
                        {/* Cycle */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Cycle</label>
                            <select
                                value={data.cycle}
                                onChange={(e) => setData("cycle", e.target.value)}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm px-4 py-2"
                            >
                                <option value="">Sélectionner un cycle</option>
                                {uniqueCycles.map((cycle, index) => (
                                    <option key={index} value={cycle}>{cycle}</option>
                                ))}
                            </select>
                            {errors.cycle && <p className="text-red-500 text-sm">{errors.cycle}</p>}
                        </div>

                        {/* Nom de la Filière */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Nom de la Filière</label>
                            <select
                                value={data.nom_filiere}
                                onChange={(e) => setData("nom_filiere", e.target.value)}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm px-4 py-2"
                            >
                                <option value="">Sélectionner une filière</option>
                                {filieres.map((filiere, index) => (
                                    <option key={index} value={filiere.nom_filiere}>{filiere.nom_filiere}</option>
                                ))}
                            </select>
                            {errors.nom_filiere && <p className="text-red-500 text-sm">{errors.nom_filiere}</p>}
                        </div>

                        {/* Débouchés */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Débouchés</label>
                            <textarea
                                value={data.debouchés}
                                onChange={(e) => setData("debouchés", e.target.value)}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm px-4 py-2"
                            />
                            {errors.debouchés && <p className="text-red-500 text-sm">{errors.debouchés}</p>}
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
