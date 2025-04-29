import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClasseServiceService {

  constructor() { }

  getClass(){
    let classes = [ 
      {'nom':    'second' ,
        'nbreClasse': 23,
        'serie': 'l2',
        'niveau':'second'

      }
      ,
      
      {'nom':    'second' ,
        'nbreClasse': 40,
        'serie': 'l2',
        'niveau':'second'

      }
    ];
    return classes;
  }
}
