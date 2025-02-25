<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('events', function (Blueprint $table) {
            $table->id();
            $table->string('titre');
            $table->date('date');
            $table->string('lieu');
            $table->text('description');
            $table->string('image');
            $table->timestamps(); // Ajoute created_at et updated_at
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('events');
    }
};
