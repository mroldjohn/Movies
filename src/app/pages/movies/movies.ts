import { Component,inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MovieCard } from '../../models/movie-card/movie-card';
import { Category,MOVIE_CATEGORIES, Movie, MovieService } from '../../services/items'
@Component({
  imports: [MovieCard, RouterLink],
  selector: 'app-movies',
  styleUrl: './movies.css',
  templateUrl: './movies.html',
})
export class Movies {
  private readonly movieService=inject(MovieService);
  pageTitle: string="Movies";
  movieCategory: Category|'All'='All';
  readonly movies:Movie[]=this.movieService.getMovies();
  readonly categories= MOVIE_CATEGORIES;
  get availableMovies(){
    return this.movies.length;
  }
  get filteredMovies():Movie[]{
    if(this.movieCategory==='All'){
      return this.movies;
    }
    return this.movies.filter((movie)=>movie.category===this.movieCategory);
  }
  setCategory(category:Category|'All'):void{
    this.movieCategory=category;
  }
  getMovieBySlug(slug:string):Movie|undefined{
    return this.movies.find((movie)=>{
      return movie.slug===slug;
    })
  }
}
