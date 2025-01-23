<?php

namespace App\Http\Controllers;

use App\Models\Information;
use Illuminate\Http\Request;

class InformationController extends Controller
{
    public function index()
    {
        $informations = Information::all();
        return response()->json($informations);
    }

    public function store(Request $request)
    {
        $request->validate([
            'titre' => 'required|string|max:255',
            'image' => 'required|string|max:255',
            'nom_image' => 'required|string|max:255',
            'description' => 'required|string',
        ]);

        $information = Information::create($request->all());
        return response()->json($information, 201);
    }

    public function show($id)
    {
        $information = Information::find($id);
        if (!$information) {
            return response()->json(['message' => 'Information non trouvée'], 404);
        }
        return response()->json($information);
    }

    public function update(Request $request, $id)
    {
        $information = Information::find($id);
        if (!$information) {
            return response()->json(['message' => 'Information non trouvée'], 404);
        }

        $information->update($request->all());
        return response()->json($information);
    }

    public function destroy($id)
    {
        $information = Information::find($id);
        if (!$information) {
            return response()->json(['message' => 'Information non trouvée'], 404);
        }

        $information->delete();
        return response()->json(['message' => 'Information supprimée avec succès']);
    }
}
