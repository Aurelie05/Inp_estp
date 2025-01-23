<?php

namespace App\Http\Controllers;

use App\Models\Presentation;
use Illuminate\Http\Request;

class PresentationController extends Controller
{
    public function index()
    {
        $presentations = Presentation::all();
        return response()->json($presentations);
    }

    public function store(Request $request)
    {
        $request->validate([
            'titre' => 'required|string|max:255',
            'texte' => 'required|string',
        ]);

        $presentation = Presentation::create($request->all());
        return response()->json($presentation, 201);
    }

    public function show($id)
    {
        $presentation = Presentation::find($id);
        if (!$presentation) {
            return response()->json(['message' => 'Présentation non trouvée'], 404);
        }
        return response()->json($presentation);
    }

    public function update(Request $request, $id)
    {
        $presentation = Presentation::find($id);
        if (!$presentation) {
            return response()->json(['message' => 'Présentation non trouvée'], 404);
        }

        $presentation->update($request->all());
        return response()->json($presentation);
    }

    public function destroy($id)
    {
        $presentation = Presentation::find($id);
        if (!$presentation) {
            return response()->json(['message' => 'Présentation non trouvée'], 404);
        }

        $presentation->delete();
        return response()->json(['message' => 'Présentation supprimée avec succès']);
    }
}
