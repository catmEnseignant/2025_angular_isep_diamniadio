import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClasseServiceService {

  constructor() { }

  getClass(){
    let classes= [
      { 'nom': 'sndlA',
        'nbrClass':42,
        'serie':'l2',
        'niveau':'second',

      }
      ,
      { 'nom': 'sndlc',
        'nbrClass':25,
        'serie':'l2',
        'niveau':'second',

      }
    ]
    return classes
  }
}
