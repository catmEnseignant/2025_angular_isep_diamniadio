import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClasseServiceService {

  constructor() { }

  getClasse(){

    let classes = [ 
      { 'nom':'second-1b',
        'niveau': 'second',
        'serie':'S2',
        'nombres_eleve':35
       
        
      },
      
      { 'nom':'second-1b',
        'niveau': 'second',
        'serie':'S1',
        'nombres_eleve':100
       
        
      },

    ]
    return classes;

  }
}
