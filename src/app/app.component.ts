import { Moduls } from './moduls/moduls';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'netflix-app';

  public acionFilms: Moduls = {
    title: 'Acción',
    image: [
      {
        src: './assets/images/Accion/ejercitomuertos.jpg',
        alt: 'Ejército de los muertos',
      },
      {
        src: './assets/images/Accion/elprotector.webp',
        alt: 'El protector',
      },
      {
        src: './assets/images/Accion/equalizer2.webp',
        alt: 'Equalizador 2',
      },
      {
        src: './assets/images/Accion/heat.webp',
        alt: 'Heat',
      },
      {
        src: './assets/images/Accion/jackreacher.webp',
        alt: 'Jack Reacher',
      },
      {
        src: './assets/images/Accion/johnwick2.webp',
        alt: 'John Wick 2',
      },
    ],
  };

  public terrorFilms : Moduls = {
    title: 'Terror',
    image:[{
      src: './assets/images/Terror/apostol.jpg',
      alt: 'Apostol'
    },
    {
      src: './assets/images/Terror/calleterror.jpg',
      alt: 'La Calle del Terror'
    },
    {
      src:'./assets/images/Terror/infiernoagua.webp',
      alt:'Infierno bajo el Agua'
    },
    {
      src:'./assets/images/Terror/insidious2.webp',
      alt:'Insidius 2'
    },
    {
      src:'./assets/images/Terror/life.webp',
      alt:'Life'
    },
    {
      src:'./assets/images/Terror/malasana.webp',
      alt:'Malasaña 32'
    },
    {
      src:'./assets/images/Terror/multiple.webp',
      alt:'Múltiple'
    }
    ]
  };
  public top5 : Moduls = {
    title: 'Top 5!',
    image:[{
      src: './assets/images/Top10/1-papel.webp',
      alt: 'La Casa de Papel'
    },
    {
    src: './assets/images/Top10/2-reina.webp',
    alt: 'La Reina'
  },
  {
  src: './assets/images/Top10/3-titanes.webp',
  alt: 'Titanes'
  },
  {
    src: './assets/images/Top10/4-lostinspace.webp',
    alt: 'Lost'
    },
    {
      src: './assets/images/Top10/5-dondecaben.webp',
      alt: 'birra de regalo!'
    }]
  }
  constructor(){}
}
