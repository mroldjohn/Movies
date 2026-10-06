import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-movie-card',
  styleUrl: './movie-card.css',
  templateUrl: './movie-card.html',
})
export class MovieCard {
  @Input() title:string="";
  @Input() desc:string="";
  @Input() duration:number=0;
  @Input() slug:string="";
  @Input() category:string="";

}
