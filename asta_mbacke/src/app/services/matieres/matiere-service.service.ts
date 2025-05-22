import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatiereServiceService {
  getMatiere() {
    throw new Error('Method not implemented.');
  }

   host="http://localhost:3000"

  constructor(private httpClient: HttpClient) { }

  storeMatiere(matiere: any){
    return  this.httpClient.post(this.host + "/matieres",matiere)
  }
  getMatieres(){
      return  this.httpClient.get(this.host + "/matieres")

  }
}
