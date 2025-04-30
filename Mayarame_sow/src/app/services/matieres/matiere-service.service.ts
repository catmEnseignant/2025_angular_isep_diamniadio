import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatiereServiceService {

  constructor() { }

    getMatiere(){

     let matiere = [
        {   'code': 'def',
            'nom': 'developpement frontend',
            'description': 'tres bien',
            'Coefficient': 17
        },

          {  'code': 'dbe',
             'nom': 'developpement backend',
             'description': 'faible',
             'Coefficient': 12
          },

            {  'code': 'ema',
               'nom': 'mecamique',
               'description': 'bien',
               'Coefficient': 16
            }


      ]
      return matiere
    }

}
