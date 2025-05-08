import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatiereServiceService {

  constructor() { }
  getMatieres(){
   let matiere = [ 
      { 
        'nom':  'mathematique',
        'niveau': 'second',
        'serie':   's2',
        'nombres_eleve': '39',
     
      }
      ,
      { 
        'nom':  'svt',
        'niveau': 'second',
        'serie':   'l1',
        'nombres_eleve': '40',
      
      },
      ]
       return matiere;
    } 
  }
