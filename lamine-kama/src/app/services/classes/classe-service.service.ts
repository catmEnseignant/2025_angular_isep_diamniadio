import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClasseServiceService {

  constructor() { }

  getClasse(){
    let classes = [
      { 'nom': 'second-la',
        'nbreClass': 23,
        'serie': 's2',
        'niveau': 'second' 
       }
     ,
      { 
        'nom': 'second-lb',
        'nbreClass': 36,
        'serie': 's1',
        'niveau': 'second' 
      },
      { 'nom': 'second-la',
        'nbreClass': 23,
        'serie': 's2',
        'niveau': 'second' 
       }
     ,
      { 
        'nom': 'second-lb',
        'nbreClass': 36,
        'serie': 's1',
        'niveau': 'second' 
      }
        ]
    return classes
  }
}
