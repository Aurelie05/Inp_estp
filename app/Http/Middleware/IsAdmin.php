<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;

class IsAdmin
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        // Vérifie si l'utilisateur est connecté et a le rôle d'admin
        if (Auth::check() && Auth::user()->is_admin) {
            return $next($request);
        }

        // Redirige l'utilisateur s'il n'est pas admin
        return redirect('/')->with('error', "Vous n'avez pas accès à cette page.");
    }
}
