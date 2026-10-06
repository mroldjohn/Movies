import { Injectable } from '@angular/core';
import { Movies } from '../pages/movies/movies';

export const MOVIE_CATEGORIES = ['Sci-Fi', 'Action', 'Thriller', 'Drama', 'Comedy', 'Horror','Crime'] as const;
export type Category = typeof MOVIE_CATEGORIES[number];

export interface Movie{
id: number;
slug:string;
title:string;
desc:string;
duration:number;
category: Category;
}
@Injectable({
    providedIn:'root'
})
export class MovieService {
    private movies: Movie[]=[
        {
            id: 1,
            slug: 'inception',
            title: 'Inception',
            desc: 'A mind-bending sci-fi thriller about dreams, memory, and reality.',
            duration: 148,
            category:'Sci-Fi'
        },
        {
            id: 2,
            slug: 'the-dark-knight',
            title: 'The Dark Knight',
            desc: 'Batman faces his most dangerous enemy in a dark crime story.',
            duration: 152,
            category:'Crime'

        },
        {
            id: 3,
            slug: 'interstellar',
            title: 'Interstellar',
            desc: 'A space adventure about survival, time, and human connection.',
            duration: 169,
            category:'Sci-Fi'

        },
        {
            id: 4,
            slug: 'spider-man-into-the-spider-verse',
            title: 'Spider-Man: Into the Spider-Verse',
            desc: 'A colorful animated superhero movie with action and heart.',
            duration: 117,
            category:'Action'

        },
        {
            id: 5,
            slug: 'the-matrix',
            title: 'The Matrix',
            desc: 'A hacker discovers that reality is not what it seems.',
            duration: 136,
            category:'Action'

        },
        {
            id: 6,
            slug: 'parasite',
            title: 'Parasite',
            desc: 'A sharp thriller about class, family, and hidden tension.',
            duration: 132,
            category:'Thriller'

        },
        {
            id: 7,
            slug: 'dune-part-two',
            title: 'Dune: Part Two',
            desc: 'A desert epic about power, prophecy, and revenge.',
            duration: 166,
            category:'Action'

        },
        {
            id: 8,
            slug: 'whiplash',
            title: 'Whiplash',
            desc: 'A tense drama about ambition, music, and obsession.',
            duration: 107,
            category:'Drama'

        }
    ]
    getMovies(): Movie[]{
        return this.movies;
    }
    getMovieBySlug(slug:string):Movie|undefined{
    return this.movies.find((movie)=>{
      return movie.slug===slug;
    })
    }
    createSlug(title:string):string{
        return title.toLowerCase().trim().replaceAll(/[^a-z0-9]/g,'').replaceAll('\s+/g','-')
    }
    addMovie(movie: Omit<Movie, 'id'|'slug'>): void{
        const newMovie: Movie={
            ...movie,
            id: this.movies.length+1,
            slug: this.createSlug(movie.title),
        };
        this.movies.push(newMovie);
    }
    deleteMovie(id:number):void{
        this.movies=this.movies.filter((movie)=>movie.id!==id);
    }
}
