import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClasseServiceService {

  constructor() { }

  getClasse(){
    let classes = [ 
      {
        'nom': 'second-la',
        'nombre_eleve':23,
        'serie':'s2',
        'niveau':'second',
      },

      {
        'nom': 'second-lb',
        'nombre_eleve': 36,
        'serie':'s1',
        'niveau':'second',
      }
        ]
      return classes

  }

  
}
