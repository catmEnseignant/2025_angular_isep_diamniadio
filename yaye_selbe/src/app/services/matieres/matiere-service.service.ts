import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatiereServiceService {

  host="http://localhost:3000"

  constructor(private httpClient:HttpClient) { }

  getMatieres(){
    return this.httpClient.get(this.host+"/matieres")

  }
}

