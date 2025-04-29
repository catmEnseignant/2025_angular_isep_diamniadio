import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatiereServiceService {

  constructor() { }

  getClasse(){
   let matieres=[
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
    return matieres;
  }

}
