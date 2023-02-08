import { Component, Input } from '@angular/core';
import { Moduls } from '../../moduls/moduls';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent {
  @Input() accionFilms!: Moduls 
  // @Input() terrorFilms!: Moduls

}
