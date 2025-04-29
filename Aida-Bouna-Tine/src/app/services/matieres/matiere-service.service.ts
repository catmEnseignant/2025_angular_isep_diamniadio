import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatiereServiceService {
  
  constructor() { }
  getClasse(){
     let matieres =[
      {
       'Nom':'l2' ,
        'niveau':'premiere' ,
        'serie':'s2',
        'nombres_eleve':'45'
      }
      ,

      {
        'Nom':'lb' ,
         'niveau':'terminal' ,
         'serie':'s2',
         'nombres_eleve':'43'
       }
        ]
    return matieres
  }

  
}
