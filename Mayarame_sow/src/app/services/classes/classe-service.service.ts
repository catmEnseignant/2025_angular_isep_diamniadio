import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClasseServiceService {

  constructor() { }

    getClasse(){

     let classes = [
        {   'code': 'def',
            'nom': 'developpement frontend',
            'niveau': 5,
            'nombre_eleve': 34
        },

          {  'code': 'dbe',
             'nom': 'developpement backend',
             'niveau': 5,
             'nombre_eleve': 58
          },

            {  'code': 'ema',
               'nom': 'mecamique',
               'niveau': 5,
               'nombre_eleve': 84
            }


      ]
      return classes
    }

}
