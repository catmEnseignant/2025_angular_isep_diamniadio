import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClasseServiceService {

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
      ,

      { 'nom':'second-l2',
        'nbreClass':43,
        'serie': 'l2',
        'niveau': 'troisieme'

      }
      ,
      


      { 'nom':'second-s1',
        'nbreClass':50,
        'serie': 's1',
        'niveau': 'terminal'
      }
    ]
    return classes

  }
}
