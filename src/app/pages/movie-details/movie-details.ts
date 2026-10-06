import { Component, inject } from '@angular/core';
import { ActivatedRoute,Router, RouterLink } from '@angular/router';
import { Movie, MovieService } from '../../services/items';
@Component({
  imports: [RouterLink],
  selector: 'app-movie-details',
  styleUrl: './movie-details.css',
  templateUrl: './movie-details.html',
})
export class MovieDetails {
  private readonly router=inject(Router);
    private readonly route=inject(ActivatedRoute);
    private readonly movieService=inject(MovieService);
    readonly slug=this.route.snapshot.paramMap.get('slug')??'';
    readonly movie: Movie|undefined=this.movieService.getMovieBySlug(this.slug);

    deleteMovie(): void{
      if(!this.movie){
        return;
      }
      this.movieService.deleteMovie(this.movie.id);
      this.router.navigate(['/movies']);
    }


  }
