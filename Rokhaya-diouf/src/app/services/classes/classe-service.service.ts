import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClasseServiceService {

  constructor() { }

  getClasse(){
   let classes=[
      {
        'nom':'dbe',
        'niveau':'3emesemestre',
        'serie':'s2',
        'nombres_eleve':33,
      }
      ,
      {
        'nom':'dfe',
        'niveau':'3emesemestre',
        'serie':'s2',
        'nombres_eleve':26,
      }

    ]
    return classes;
  }
}
