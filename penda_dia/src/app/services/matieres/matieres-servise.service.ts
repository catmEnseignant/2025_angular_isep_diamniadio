import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatieresServiceService {

  constructor(private httpClient: HttpClient) { }
  host="http://localhost:3000";
  getMatieres(){
    this.httpClient.get(this.host+"/matieres")
    return this.httpClient.get(this.host+"/matieres")
    
  }
}
