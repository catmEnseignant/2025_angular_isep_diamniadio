import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatieresServiceService {

  constructor() { }

  getClass(){
   let matieres = [ 
    {'code' : 'AGl',
      'nom' : 'Angular',
      'description' : 'creaction de site web',
      'coefficient' : '2'
    }
    ,
    {
      'code' : 'LRV',
      'nom' : 'Laravel',
      'description' : 'creaction application ',
      'coefficient' : '3'
    },
    {
      'code' : 'Dev web',
      'nom' : 'HTML CSS',
      'description' : 'creaction site web',
      'coefficient' : '1'
    }
  ]
      return matieres;
 }
}
