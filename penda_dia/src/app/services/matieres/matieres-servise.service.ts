import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatieresServiceService {
  host="http://localhost:3000";

  constructor(private httpClient: HttpClient) { }
  
  getMatieres(){
    this.httpClient.get(this.host+"/matieres")
    return this.httpClient.get(this.host+"/matieres")
    
  }
  storeMatieres(matiere:any){
    return this.httpClient.post(this.host+"/matieres" , matiere)
  }
}
