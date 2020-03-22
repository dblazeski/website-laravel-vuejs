<?php

namespace App\Http\Controllers;

use App\Http\Resources\WebsitesResourceCollection;
use Illuminate\Http\Request;
use App\Websites;

class WebsitesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Websites $websites)
    {
		$webs = Websites::query();

		// Allowed sort rules
		switch (request()->input('sort')) {
			case 'name':
				$webs->orderBy('name', 'ASC');
				break;
			default:
				$webs->orderBy('id', 'DESC');
				break;
		}

		if ($s = request()->input('search')) {
			$webs->whereNested(function($q) use($s) {
				$q->where('name', 'LIKE', "%$s%");
				$q->orWhere('url', 'LIKE', "%$s%");
			});
		}

		$webs = $webs->paginate(10);
		return new WebsitesResourceCollection($webs);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
		$request->validate([
			'name' => 'required|max:255',
			'url' => 'required|url|unique:websites',
		]);

		Websites::create(
			$request->only([ 'name', 'url' ])
		);

		return response()->json([
			'message' => 'Website added'
		]);
    }

}
