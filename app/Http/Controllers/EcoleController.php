<?php

namespace App\Http\Controllers;

use App\Models\Ecole;
use Illuminate\Http\Request;

class EcoleController extends Controller
{
    public function index()
    {
        $ecoles = Ecole::all();
        return response()->json($ecoles);
    }

    public function store(Request $request)
    {
        $request->validate([
            'cycle' => 'required|string|max:255',
            'description' => 'required|string',
        ]);

        $ecole = Ecole::create($request->all());
        return response()->json($ecole, 201);
    }

    public function show($id)
    {
        $ecole = Ecole::find($id);
        if (!$ecole) {
            return response()->json(['message' => 'École non trouvée'], 404);
        }
        return response()->json($ecole);
    }

    public function update(Request $request, $id)
    {
        $ecole = Ecole::find($id);
        if (!$ecole) {
            return response()->json(['message' => 'École non trouvée'], 404);
        }

        $ecole->update($request->all());
        return response()->json($ecole);
    }

    public function destroy($id)
    {
        $ecole = Ecole::find($id);
        if (!$ecole) {
            return response()->json(['message' => 'École non trouvée'], 404);
        }

        $ecole->delete();
        return response()->json(['message' => 'École supprimée avec succès']);
    }
}
