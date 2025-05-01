import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatiereServiceService {

  constructor() { }

  getClasse(){
    let classes =  [
      { 'nom':'second-l2',
        'nbreClass':23,
        'serie': 'l2',
        'niveau': 'seconde'

      }
      ,


      { 'nom':'second-s1',
        'nbreClass':36,
        'serie': 's1',
        'niveau': 'premier'
      }
    ]
    return classes

  }
}
