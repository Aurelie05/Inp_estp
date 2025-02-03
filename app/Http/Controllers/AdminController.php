<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Slider;
use App\Models\Presentation;
use App\Models\Event;
use App\Models\Filiere;
use App\Models\Ecole;
use App\Models\Information;

use Inertia\Inertia;


class AdminController extends Controller
{
   // Afficher tous les sliders
   public function index()
   {
       $slider = Slider::all(); // Récupérer tous les sliders
       dd($slider);  
       return Inertia::render('Slider/SliderPage', [
           'slider' => $slider,
           'csrf_token' => csrf_token(), // Passer le CSRF token
       ]);
   }

   // Ajouter un nouveau slider
   public function store(Request $request)
   {
       // Valider les données
       $request->validate([
           'titre' => 'required|string|max:255',
           'image' => 'required|image|mimes:jpeg,png,jpg|max:2048',
       ]);

       try {
           $slider = new Slider();
           $slider->titre = $request->titre;

           // Vérification et stockage de l'image
           if ($request->hasFile('image')) {
               $slider->image = $request->file('image')->store('slider', 'public');
           }

           $slider->save(); // Sauvegarder le slider

           // Retourner une réponse Inertia après la création du slider
           return Inertia::render('SliderPage', [
               'slider' => Slider::all(),
               'message' => 'Slider créé avec succès',
           ]);

       } catch (\Exception $e) {
           // En cas d'erreur, on retourne une erreur dans la réponse Inertia
           return Inertia::render('SliderPage', [
               'message' => 'Erreur lors de la création du slider: ' . $e->getMessage(),
           ]);
       }
   }

   // Afficher un slider par ID
   public function show($id)
   {
       $slider = Slider::find($id);
       
       if (!$slider) {
           // Retourner un message d'erreur via Inertia si le slider n'est pas trouvé
           return Inertia::render('SliderPage', [
               'message' => 'Slider non trouvé',
           ]);
       }

       // Retourner le slider trouvé avec Inertia
       return Inertia::render('SliderPage', [
           'slider' => $slider,
       ]);
   }

   // Mettre à jour un slider
   public function update(Request $request, $id)
   {
       // Récupérer le slider par ID
       $slider = Slider::find($id);
       
       if (!$slider) {
           return Inertia::render('SliderPage', [
               'message' => 'Slider non trouvé',
           ]);
       }

       // Validation des données de mise à jour
       $validated = $request->validate([
           'titre' => 'string|max:255',
           'image' => 'image|mimes:jpeg,png,jpg,gif|max:2048',
       ]);

       // Mise à jour du slider
       $slider->update($validated);

       // Retourner une réponse Inertia après la mise à jour
       return Inertia::render('SliderPage', [
           'sliders' => Slider::all(),
           'message' => 'Slider mis à jour avec succès',
       ]);
   }

   // Supprimer un slider
   public function destroy($id)
   {
       $slider = Slider::find($id);

       if (!$slider) {
           return Inertia::render('SliderPage', [
               'message' => 'Slider non trouvé',
           ]);
       }

       $slider->delete(); // Supprimer le slider

       // Retourner une réponse Inertia après la suppression
       return Inertia::render('SliderPage', [
           'sliders' => Slider::all(),
           'message' => 'Slider supprimé avec succès',
       ]);
   }
    // Gestion des présentations
    public function presentations()
    {
        $presentations = Presentation::all();
        return view('admin.presentations.index', compact('presentations'));
    }

    public function storePresentation(Request $request)
    {
        $request->validate([
            'titre' => 'required|string|max:255',
            'texte' => 'required',
        ]);

        $presentation = new Presentation();
        $presentation->titre = $request->titre;
        $presentation->texte = $request->texte;
        $presentation->save();

        return redirect()->back()->with('success', 'Présentation ajoutée avec succès !');
    }

    public function deletePresentation($id)
    {
        $presentation = Presentation::findOrFail($id);
        $presentation->delete();
        return redirect()->back()->with('success', 'Présentation supprimée avec succès !');
    }

    // Gestion des événements
    public function events()
    {
        $events = Event::all();
        return view('admin.events.index', compact('events'));
    }

    public function storeEvent(Request $request)
    {
        $request->validate([
            'titre' => 'required|string|max:255',
            'image' => 'required|image|mimes:jpeg,png,jpg|max:2048',
            'date' => 'required|date',
            'lieu' => 'required|string|max:255',
            'description' => 'required|string',
        ]);

        $event = new Event();
        $event->titre = $request->titre;
        $event->date = $request->date;
        $event->lieu = $request->lieu;
        $event->description = $request->description;

        if ($request->hasFile('image')) {
            $event->image = $request->file('image')->store('events', 'public');
        }

        $event->save();

        return redirect()->back()->with('success', 'Événement ajouté avec succès !');
    }

    public function deleteEvent($id)
    {
        $event = Event::findOrFail($id);
        $event->delete();
        return redirect()->back()->with('success', 'Événement supprimé avec succès !');
    }

    // Ajoutez des méthodes similaires pour Filiere, Ecole, et Information...
}
