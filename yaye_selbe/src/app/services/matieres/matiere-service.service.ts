import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatiereServiceService {

  constructor() { }

  getMatiere(){
    let matieres = [ 
      {
        'nom':'terminal-lb',
        'description':'terminal',
        'coeficcient':'l2',
        'nombre_jour':32
      }
      ,
      {
        'nom':'second-lb',
        'description':'second',
        'coefficient':'s2',
        'nombre_jour':22,
      }
    ]
    return matieres;
  }
}

