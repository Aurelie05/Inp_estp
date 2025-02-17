<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Exécute la migration.
     */
    public function up(): void
    {
        Schema::create('information', function (Blueprint $table) {
            $table->id(); // Clé primaire
            $table->string('titre');
            $table->string('image');
            $table->string('nom_image')->nullable();
            $table->text('description');
            $table->timestamps(); // created_at et updated_at
        });
    }

    /**
     * Annule la migration.
     */
    public function down(): void
    {
        Schema::dropIfExists('information');
    }
};
