import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MatiereServiceService {
   constructor(private httpClient:HttpClient) { }

   host="http://localhost:3000/"
  
 
  getMatieres(){
    //  this.httpClient.get(this.host+"matieres")
    return this.httpClient.get(this.host+"/matieres")
    //  let matieres =[
    //   {
    //    'Nom':'Imformatique' ,
    //     'niveau':'angular' ,
    //     'serie':'45',
    //     'nombres_eleve':'Mbingue'
    //   }
    //   ,

    //   {
    //     'Nom':'imformatique' ,
    //      'niveau':'laravel' ,
    //      'serie':'3',
    //      'nombres_eleve':'cherif'
    //    }
    //     ]
    // return matieres
  }

  
}
