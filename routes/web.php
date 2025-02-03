<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\SliderController;
use App\Http\Controllers\PresentationController;
use App\Http\Controllers\EventController;
use App\Http\Controllers\FiliereController;
use App\Http\Controllers\EcoleController;
use App\Http\Controllers\InformationController;
use App\Http\Controllers\AdminController;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/presentation', function () {
    return Inertia::render('Presentation'); 
});
Route::get('/ecole', function () {
    return Inertia::render('Ecoles'); 
});
Route::get('/partenaire', function () {
    return Inertia::render('Partenaire'); 
});
Route::get('/actualités', function () {
    return Inertia::render('Actualités'); 
});

// Route::get('/sliders', function (){
//     return Inertia::render('Slider/SliderPage');

// });

// Route::get('/sliders/create', function (){
//     return Inertia::render('Slider/SliderForm');

// });
// Route::post('/sliders', [SliderController::class, 'store']);

// Routes protégées par authentification
Route::middleware(['auth'])->group(function () {
    // Afficher la liste des sliders
    Route::get('/sliders', function (){
        return Inertia::render('Slider/SliderPage');
    }) ->name('sliders.index');

    // Afficher le formulaire pour créer un slider
    Route::get('/sliders/create', function () {
        return Inertia::render('Slider/SliderForm');
    })->name('sliders.create');

    // Ajouter un slider
    Route::post('/sliders', [AdminController::class, 'store'])->name('sliders.store');

    // Supprimer un slider
    Route::delete('/sliders/{id}', [AdminController::class, 'deleteSlider'])->name('sliders.delete');
});

// Autres routes pour l'admin
Route::get('/admin/sliders', [AdminController::class, 'sliders'])->name('admin.sliders');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
