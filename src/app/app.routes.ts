import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Movies } from './pages/movies/movies';
import { MovieDetails } from './pages/movie-details/movie-details';
import { AddMovie} from './pages/add-movie/add-movie';
export const routes: Routes = [
    {
        path:'',
        component:Home
    },
    {
        path:'movies',
        component:Movies
    },
    {
        path:'movies/add-movies',
        component:AddMovie
    },
    {
        path:'movies/:slug',
        component:MovieDetails
    }
];
