<?php

namespace App\Http\Controllers;

use App\Models\Slider;
use Illuminate\Http\Request;

class SliderController extends Controller
{
    public function index()
    {
        // Récupérer tous les sliders
        $sliders = Slider::all();
        return response()->json($sliders);
    }

    public function store(Request $request)
    {
        // Valider les données
        $request->validate([
            'titre' => 'required|string|max:255',
            'image' => 'required|string|max:255',
        ]);

        // Créer un nouveau slider
        $slider = Slider::create($request->all());
        return response()->json($slider, 201);
    }

    public function show($id)
    {
        // Récupérer un slider par ID
        $slider = Slider::find($id);
        if (!$slider) {
            return response()->json(['message' => 'Slider non trouvé'], 404);
        }
        return response()->json($slider);
    }

    public function update(Request $request, $id)
    {
        // Mettre à jour un slider
        $slider = Slider::find($id);
        if (!$slider) {
            return response()->json(['message' => 'Slider non trouvé'], 404);
        }

        $slider->update($request->all());
        return response()->json($slider);
    }

    public function destroy($id)
    {
        // Supprimer un slider
        $slider = Slider::find($id);
        if (!$slider) {
            return response()->json(['message' => 'Slider non trouvé'], 404);
        }

        $slider->delete();
        return response()->json(['message' => 'Slider supprimé avec succès']);
    }
}
