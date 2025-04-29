import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatiereServiceService {

  constructor() { }

  getMatiere(){

    let matieres = [ 
      { 'code':'DFE',
        'nom': 'infomatique',
        'description':'frond-End',
        'coefficient':35
       
        
      },
      
      { 'code':'DBE',
        'nom': 'informatique',
        'description':'back-End',
        'coefficient':100
       
        
      },

    ]
    return matieres;

  }
}

