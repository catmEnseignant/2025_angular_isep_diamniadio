import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClasseServiceService {

  constructor() { }

  getClasse() {
    let classes = [
      {
        'nom': 'dfe',
        'nbreClass': 23,
        'serie': 's2',
        'niveau': 'second'
      },
      {
        'nom': 'dfe',
        'nbreClass': 23,
        'serie': 's2',
        'niveau': 'second'
      }
    ];
    return classes; 
  }
}
