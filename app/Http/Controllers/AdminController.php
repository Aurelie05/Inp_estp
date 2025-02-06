<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Slider;
use App\Models\Presentation;
use App\Models\Evenement;
use App\Models\Filiere;
use App\Models\Ecole;
use App\Models\Information;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;



class AdminController extends Controller
{
   // Afficher tous les sliders
   public function sliders()
   {
       $slider = Slider::all(); // Récupérer tous les sliders
    //    dd($slider);  
       return Inertia::render('Slider/SliderPage', [
           'slider' => $slider,
        //    'csrf_token' => csrf_token(), 
       ]);
   }

   public function store(Request $request)
{
    $request->validate([
        'titre' => 'required|string|max:255',
        'image' => 'required|image|mimes:jpeg,png,jpg|max:2048',
    ]);

    $slider = new Slider();
    $slider->titre = $request->titre;

    if ($request->hasFile('image')) {
        $slider->image = $request->file('image')->store('sliders', 'public');
    }

    $slider->save();

    return back()->with('success', 'Slider ajouté avec succès !');


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
   

   
     // Affichage des événements
     public function evenement()
     {
        $evenements = Evenement::latest()->get();
            // dd($events); 
         return Inertia::render('Event/EventPage', [
             'evenements' => $evenements, // Envoyer les événements à Inertia
         ]);
       
     }
        public function welcome()
    {
        // Récupérer les événements pour la page d'accueil
        $evenements = Evenement::all();
          // Récupérer les sliders
        $sliders = Slider::all(); // Assure-toi que tu as bien un modèle Slider configuré
       
        // Retourner la vue d'accueil (Welcome) avec les événements
        return Inertia::render('Welcome', [
            'evenements' => $evenements,
            'sliders' => $sliders,
            
        ]);
    }
    
     // Ajout d'un événement
     public function storeEvenement(Request $request)
     {
         $request->validate([
             'titre' => 'required|string|max:255',
             'image' => 'required|image|mimes:jpeg,png,jpg|max:2048',
             'date' => 'required|date',
             'lieu' => 'required|string|max:255',
             'description' => 'required|string',
         ]);
 
         $evenement = new Evenement();
         $evenement->titre = $request->titre;
         $evenement->date = $request->date;
         $evenement->lieu = $request->lieu;
         $evenement->description = $request->description;
 
         if ($request->hasFile('image')) {
            $evenement->image = $request->file('image')->store('evenements', 'public');
         }
 
         $evenement->save();
 
         return back()->with('success', 'Événement ajouté avec succès !');
     }
 
     // Suppression d'un événement
     public function deleteEvenement($id)
     {
         $evenement = Evenement::findOrFail($id);
         $evenement->delete();
         return redirect()->route('evenement')->with('success', 'Événement supprimé avec succès !');
     }


     public function presentation()
{
    // Récupérer les informations à afficher sur la page de présentation
    $informations = Information::all();

    // Retourner la vue Presentation avec les informations
    return Inertia::render('Presentation', [
        'informations' => $informations,
    ]);
}
    // Ajoutez des méthodes similaires pour Filiere, Ecole, et Information...


    public function createInformation()
    {
        return Inertia::render('InformationForm'); // Ou ton nom de composant/vue
    }
    public function storeInformation(Request $request)
    {
        // Valider les données
        $validated = $request->validate([
            'titre' => 'required|string|max:255',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif|max:5120', // Accepte un fichier image
            'nom_image' => 'required|string|max:255',
            'description' => 'required|string',
        ]);
        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('public/information'); // Stocke dans storage/app/public/information
            $validated['image'] = Storage::url($imagePath); // Génère une URL exploitable
        }
    
        // Créer l'information dans la base de données
        Information::create($validated);
    
        // Retourner la page avec un message de succès
        return redirect()->route('presentation')->with('success', 'Information ajoutée avec succès');
    }

    
}


