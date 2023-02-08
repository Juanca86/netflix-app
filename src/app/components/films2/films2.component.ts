import { Moduls } from './../../moduls/moduls';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-films2',
  templateUrl: './films2.component.html',
  styleUrls: ['./films2.component.scss']
})
export class Films2Component {
  @Input() terrorFilms!: Moduls

}
