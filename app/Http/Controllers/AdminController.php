<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Slider;
use App\Models\Presentation;
use App\Models\Event;
use App\Models\Filiere;
use App\Models\Ecole;
use App\Models\Information;

class AdminController extends Controller
{
    // Gestion des sliders
    public function sliders()
    {
        $sliders = Slider::all();
        return view('admin.sliders.index', compact('sliders')); // Affiche les sliders
    }

    public function storeSlider(Request $request)
    {
        $request->validate([
            'titre' => 'required|string|max:255',
            'image' => 'required|image|mimes:jpeg,png,jpg|max:2048',
        ]);

        $slider = new Slider();
        $slider->titre = $request->titre;
        
        if ($request->hasFile('image')) {
            $slider->image = $request->file('image')->store('sliders', 'public'); // Stocker dans le dossier 'sliders'
        }

        $slider->save();

        return redirect()->back()->with('success', 'Slider ajouté avec succès !');
    }

    public function deleteSlider($id)
    {
        $slider = Slider::findOrFail($id);
        $slider->delete();
        return redirect()->back()->with('success', 'Slider supprimé avec succès !');
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
