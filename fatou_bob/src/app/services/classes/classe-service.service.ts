import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClasseServiceService {

  constructor() { }
  getClasse(){
    let classes = [ 
      {'nom':'second-la',
        'nombres_eleve':23,
        'serie':'dfe',
        'niveau':'terminal'
      }
      ,
      {'nom':'second-lA',
        'nombres_eleve':83,
        'serie':'s5',
        'niveau':'second'
      }
    ]
    return classes; 
  }
}
