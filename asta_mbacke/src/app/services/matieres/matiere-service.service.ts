import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatiereServiceService {

  constructor() { }

  getClasse(){
    let classes = [ 
      {
        'nom': 'Sla',
        'description':'second',
        'serie':'s2',
        'coefficient':'5',
      },

      {
        'nom': 'Slb',
        'description': 'second',
        'serie':'s1',
        'coefficient':'6',
      }
        ]
      return classes

  }
}
