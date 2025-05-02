import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClasseServiseService {

  constructor() { }

  getClass(){
   let classes = [ 
    {'nom' : 'DFE',
      'niveau' : 'BTS',
      'Serie' : 'TIC',
      'nombre_eleve' : '33'
    }
    ,
    {
      'nom' : 'DBE',
      'niveau' : 'BTS',
      'Serie' : 'TIC',
      'nombre_eleve' : '41'
    },
    {
      'nom' : 'Carosserie',
      'niveau' : 'BTS',
      'Serie' : 'Automobile',
      'nombre_eleve' : '37'
    },
    {
      'nom' : 'Climatisation et Chauffage',
      'niveau' : 'BTS',
      'Serie' : 'Automobile',
      'nombre_eleve' : '43'
    }
  ]
      return classes;
 }
}