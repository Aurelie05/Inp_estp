<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::table('filieres', function (Blueprint $table) {
            $table->string('debouchés', 512)->default('Non spécifié')->change(); // Increased length to 512
        });
    }

    public function down()
    {
        Schema::table('filieres', function (Blueprint $table) {
            $table->text('debouchés')->change(); // Remet en `TEXT` sans défaut
        });
    }
};
