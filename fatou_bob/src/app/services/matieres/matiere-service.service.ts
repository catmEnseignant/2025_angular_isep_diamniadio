import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatiereServiceService {

  constructor() { }
    getMatiere(){
      let matieres = [ 
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
      return matieres; 
    }
  
}
