import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatiereServiceService {

  constructor() { }
  getMatieres(){
    let matieres = [
      { 'code': 1,
        'nom': 23,
        'description': 'science physique',
        'coefficient': 3
       }
     ,
      { 
        'code': 2,
        'nom': 'pc',
        'description': 'math',
        'coefficient': 3 
      },
      { 'code': 3,
        'nom': 'pc',
        'description': 'science ',
        'coefficient': 2
       }
     ,
      { 
        'code': 4,
        'nom': 'svt',
        'description': 'science de la vie et de la terre',
        'coefficient': 4 
      }
        ]
    return matieres
  }
}
