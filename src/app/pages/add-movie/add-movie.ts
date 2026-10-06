import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule,Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Category,MOVIE_CATEGORIES,MovieService } from '../../services/items';
@Component({
  imports: [ReactiveFormsModule, RouterLink],
  selector: 'app-add-movie',
  styleUrl: './add-movie.css',
  templateUrl: './add-movie.html',
})
export class AddMovie {
  private readonly formBuilder=inject(FormBuilder);
  readonly categories = MOVIE_CATEGORIES;
  private readonly movieService=inject(MovieService);
  // readonly slug=this.route.snapshot.paramMap.get('slug')??'';
  // readonly movie: Movie|undefined=this.movieService.getMovieBySlug(this.slug);
  readonly movieForm = this.formBuilder.nonNullable.group({
    title:['',[Validators.required,Validators.minLength(2)]],
    category:['',[Validators.required,Validators.pattern(/^(Sci-Fi|Action|Thriller|Drama|Comedy|Crime)$/)]],
    description:['',[Validators.required,Validators.minLength(15)]],
    duration:[0,[Validators.required,Validators.min(1),Validators.max(400)]],
  });
  successMessage:string='';
  onSubmit():void{
    if(this.movieForm.invalid){
      this.movieForm.markAllAsTouched();
      return;
    }
    const movieData=this.movieForm.getRawValue();

    this.movieService.addMovie({
      title: movieData.title,
      desc: movieData.description,
      category: movieData.category as Category,
      duration: movieData.duration,
    });      
    this.movieForm.reset()
  }
}
