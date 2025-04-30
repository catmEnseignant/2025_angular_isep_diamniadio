import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClasseServiceService {

  constructor() { }

  getClasse(){
  var   classes = [
    {'nom':'Second-lA',
      'niveau':'Second',
      'serie':'S1',
      'nombre_eleve':'23'
    },
      {'nom':'Second-lB',
        'niveau':'Second',
        'serie':'S2',
        'nombre_eleve':'33'
       },
    {'nom':'1ere-LA',
      'niveau':'1ere',
      'serie':'L2',
      'nombre_eleve':'23'
    },
      {'nom':'1ere-lB',
        'niveau':'1ere',
        'serie':'L2',
        'nombre_eleve':'33'
       }
  ]
     return classes
    
  }
}
