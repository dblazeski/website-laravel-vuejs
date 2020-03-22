<?php

use App\Websites;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateWebsitesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('websites', function (Blueprint $table) {
			$table->id();

			$table->string('name');
			$table->text('url');

            $table->timestamps();
		});

		// Add the two records, seeder?
		// Websites::unguard()
		Websites::create([
			'name' => 'My first website',
			'url' => 'http://first.example.com'
		]);
		Websites::create([
			'name' => 'My second website',
			'url' => 'http://second.example.com'
		]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('websites');
    }
}
