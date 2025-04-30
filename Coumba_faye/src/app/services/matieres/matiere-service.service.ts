import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatiereServiceService {

  constructor() { }
  getMatiere(){
    var   matieres = [
      {'nom':'UMl',
        'description':'Unified Modeling Lanugage',
        'coefficient':'6',
        'nombre_de_jours':'2 jours'
      },
        {'nom':'Angular',
          'description':'Un fromework open-source',
          'coefficient':'6',
          'nombre_de_jours':'3 jours'
         },
      {'nom':'React',
        'description':'une biblotheque javaSript',
        'coefficient':'6',
        'nombre_de_jours':'4 jours'
      },
        {'nom':'Java',
          'description':'Un language de programmation oriente objet',
          'coefficient':'6',
          'nombre_de_jours':'3 jours'
         }
    ]
       return matieres
      
    }
  }

