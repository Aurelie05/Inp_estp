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
    Schema::table('information', function (Blueprint $table) {
        $table->timestamps(); // Ajoute created_at et updated_at
    });
}

    /**
     * Reverse the migrations.
     */
    public function down()
{
    Schema::table('information', function (Blueprint $table) {
        $table->dropTimestamps();
    });
}
};
