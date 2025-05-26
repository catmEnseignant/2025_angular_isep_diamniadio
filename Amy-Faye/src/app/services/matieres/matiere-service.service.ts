import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MatiereServiceService {
   host="http://localhost:3000"

    constructor(private httpClient:HttpClient) { }

    getClasse(){
      return  this.httpClient.get(this.host +"/matieres")

    }

    storeMatiere(matiere :any){
      return  this.httpClient.post(this.host +"/matieres", matiere)

    }


  /*constructor(private httpClient:HttpClient) { }

  getClasse(){
    let classes =  [
      { 'nom':'second-l2',
        'nbreMatiere':15,
        'serie': 'l2',
        'niveau': 'seconde'

      }
      ,


      { 'nom':'second-s1',
        'nbreMatiere':20,
        'serie': 's1',
        'niveau': 'seconde'
      }
      ,

      { 'nom':'premier-s1',
        'nbreMatiere':22,
        'serie': 's1',
        'niveau': 'premier'
      }
      ,

      { 'nom':'premier-s2',
        'nbreMatiere':18,
        'serie': 's2',
        'niveau': 'premier'
      }
    ]
    return this.httpClient.get(this.host +"/matieres"

  }*/
}
