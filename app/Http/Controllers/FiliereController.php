<?php

namespace App\Http\Controllers;

use App\Models\Filiere;
use Illuminate\Http\Request;

class FiliereController extends Controller
{
    public function index()
    {
        $filieres = Filiere::all();
        return response()->json($filieres);
    }

    public function store(Request $request)
    {
        $request->validate([
            'titre' => 'required|string|max:255',
            'nom_filiere' => 'required|string|max:255',
            'debouchés' => 'required|string',
        ]);

        $filiere = Filiere::create($request->all());
        return response()->json($filiere, 201);
    }

    public function show($id)
    {
        $filiere = Filiere::find($id);
        if (!$filiere) {
            return response()->json(['message' => 'Filière non trouvée'], 404);
        }
        return response()->json($filiere);
    }

    public function update(Request $request, $id)
    {
        $filiere = Filiere::find($id);
        if (!$filiere) {
            return response()->json(['message' => 'Filière non trouvée'], 404);
        }

        $filiere->update($request->all());
        return response()->json($filiere);
    }

    public function destroy($id)
    {
        $filiere = Filiere::find($id);
        if (!$filiere) {
            return response()->json(['message' => 'Filière non trouvée'], 404);
        }

        $filiere->delete();
        return response()->json(['message' => 'Filière supprimée avec succès']);
    }
}
